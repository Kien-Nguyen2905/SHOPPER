import { PAYMENT_METHOD, THUNK_STATUS } from "@/constants/general";
import { PATHS } from "@/constants/pathname";
import { orderService } from "@/services/orderService";
import { checkout } from "@/store/middleware/orderMiddleware";
import { cartActions } from "@/store/reducers/cartReducer";
import { message } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartInfo } = useSelector((state) => state.cart);
  const { checkoutStatus } = useSelector((state) => state.order);
  // Coupon Props
  console.log(cartInfo);
  const onAddCoupon = async (coupon) => {
    try {
      const couponRes = await orderService.getVoucher(coupon);
      if (couponRes) {
        const { subTotal, shipping } = cartInfo || {};
        dispatch(
          cartActions.updateCacheCart({
            ...cartInfo,
            discount: couponInfo.value || 0,
            discountCode: couponInfo.code || "",
            total: subTotal - (couponInfo.value || 0) + (shipping?.price || 0),
          })
        );
        message.success("Successfully");
      }
    } catch (error) {
      console.log("error", error);
      message.error("Failed");
    }
  };
  const onRemoveCoupon = (callback) => {
    try {
      if (cartInfo.discountCode) {
        const { subTotal, shipping } = cartInfo || {};
        dispatch(
          cartActions.updateCacheCart({
            ...cartInfo,
            discount: 0,
            discountCode: "",
            total: subTotal + (shipping?.price || 0),
          })
        );
        message.success("Successfully");
        callback?.();
      }
    } catch (error) {
      console.log("error", error);
      message.error("Failed");
    }
  };
  const couponProps = {
    addedCoupon: cartInfo.discountCode,
    onAddCoupon,
    onRemoveCoupon,
  };
  const { profile } = useSelector((state) => state.auth);
  const form = useForm();
  useEffect(() => {
    if (profile?.id) {
      const {
        email,
        firstName,
        phone,
        street,
        province,
        district,
        ward,
        birthday,
      } = profile || {};
      // async set form value with RHF
      form.reset({
        email: email,
        fullName: firstName || "",
        phone: phone,
        street: street,
        province: province,
        district: district,
        ward: ward,
        birthday: birthday
          ? dayjs(birthday || "01-01-2000")
              .format("YYYY/MM/DD")
              .replaceAll("/", "-")
          : "",
        note: "",
      });
    }
  }, [profile]);

  const billingProps = {
    profile: profile || {},
    form,
  };
  // Summary Props
  const [currenPaymentMethod, setCurrentPaymentMethod] = useState(
    cartInfo.paymentMethod || PAYMENT_METHOD.cash
  );

  useEffect(() => {
    if (Object.values(PAYMENT_METHOD).includes(cartInfo.paymentMethod)) {
      setCurrentPaymentMethod(cartInfo.paymentMethod);
    }
  }, [cartInfo.paymentMethod]);

  const modProducts = cartInfo.product?.map((product, index) => {
    return {
      ...product,
      quantity: cartInfo.quantity?.[index],
    };
  });

  const handleCheckout = async () => {
    const {
      shipping,
      variant,
      product,
      quantity,
      discount,
      discountCode,
      total,
      subTotal,
      totalProduct,
    } = cartInfo || {};
    const { phone, email, fullName, street, note } = form.getValues() || {};
    const productPayload = product.map((product) => {
      return product.id;
    });
    const orderPayload = {
      address: {
        phone: phone || "",
        email: email || "",
        fullName: fullName || "",
        street: street || "",
      },
      shipping,
      variant,
      subTotal,
      total,
      product: productPayload,
      quantity,
      totalProduct,
      discount,
      discountCode,
      paymentMethod: currenPaymentMethod || "",
      note: note || "",
    };
    try {
      if (
        orderPayload?.product?.length > 0 &&
        checkoutStatus !== THUNK_STATUS.pending
      ) {
        const res = await dispatch(checkout(orderPayload)).unwrap();
        if (res) {
          message.success("Succecssfully");
          navigate(PATHS.CHECK_OUT_SUCCESS);
        } else {
          message.error("Failed");
        }
      }
    } catch (error) {
      console.log("error", error);
      message.error("Failed");
    }
  };

  const onPlaceOrder = () => {
    if (!!!cartInfo.shipping?.typeShip) {
      message.error("Please select type shipping in your order");
    } else if (currenPaymentMethod == "string") {
      console.log(currenPaymentMethod);
      message.error("Please choose payment method");
    } else {
      const checkout = form.handleSubmit(handleCheckout);
      checkout();
    }
  };

  const summaryProps = {
    products: modProducts,
    subTotal: cartInfo.subTotal,
    total: cartInfo.total,
    shipping: cartInfo.shipping,
    paymentMethod: currenPaymentMethod,
    onUpdatePaymentMethod: setCurrentPaymentMethod,
    onPlaceOrder,
  };
  return { couponProps, billingProps, summaryProps };
};
