import { useMainContext } from "@/components/Maincontext/MainContext";
import { THUNK_STATUS } from "@/constants/general";
import { MESSAGE } from "@/constants/message";
import { RVTAB } from "@/constants/review";
import { useMutation } from "@/hooks/useMutation";
import { useQuery } from "@/hooks/useQuery";
import { orderService } from "@/services/orderService";
import { productService } from "@/services/productService";
import { wishlistService } from "@/services/wishlistService";
import { profileUser } from "@/store/middleware/authMiddleware";
import { updateCart } from "@/store/middleware/cartMiddleware";
import { message } from "antd";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useProductDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { openModal, checkAuthen } = useMainContext();
  const { cartInfo, updateStatus } = useSelector((state) => state.cart);
  const { execute } = useMutation(wishlistService.addList, {
    onSuccess: (data) => {
      console.log(data);
      dispatch(profileUser());
      message.success(MESSAGE.WISHLIST);
    },
    onFail: (error) => {
      console.log(error);
      message.error("Failed");
    },
  });
  const onWishList = (idProduct) => {
    if (!checkAuthen) {
      openModal();
    } else {
      execute({ product: idProduct });
    }
  };
  const productDetailForm = useForm({
    defaultValues: {
      quantity: "1",
    },
  });
  const {
    data: dataProductDetail,
    loading: loadingProductDetail,
    error: errorProductDetail,
  } = useQuery(() => productService.getProductsDetail(slug), [slug]);
  const onAdd = async (updateValue, idDetail) => {
    if (!checkAuthen) {
      openModal();
    } else if (idDetail && updateStatus !== THUNK_STATUS.pending) {
      try {
        let addPayload = {};
        const newColor = productDetailForm.getValues("color");
        if (cartInfo.id) {
          const matchIndex = cartInfo.product?.findIndex(
            (product) => product.id === idDetail
          );
          const newProductPayload = cartInfo.product?.map((product) => {
            return product.id;
          });
          const newQuantityPayload = [...cartInfo.quantity];
          const newColorPayload = [...(cartInfo?.color ?? [])];
          if (matchIndex > -1) {
            newQuantityPayload[matchIndex] = (
              Number(newQuantityPayload[matchIndex]) + Number(updateValue)
            ).toString();
            newColorPayload[matchIndex] = newColor;
          } else {
            newProductPayload.push(idDetail);
            newQuantityPayload.push(updateValue);
            newColorPayload.push(newColor);
          }
          addPayload = {
            ...cartInfo,
            product: newProductPayload,
            quantity: newQuantityPayload,
            color: newColorPayload,
          };
        } else {
          addPayload = {
            product: [idDetail],
            quantity: [updateValue],
            color: [newColor],
            subTotal: 0,
            total: 0,
            totalProduct: ["string"],
            discount: 0,
            paymentMethod: "string",
          };
        }
        const res = await dispatch(updateCart(addPayload)).unwrap();
        if (res.id) {
          message.success(MESSAGE.ADDSUCCESS);
        }
      } catch (error) {
        console.log("error", error);
        message.error("Failed");
      }
    }
  };
  const { data: productDetailReviews, refetch: refetchReviews } = useQuery(
    dataProductDetail?.id ? orderService.getReviewFollowProduct : null
  );
  useEffect(() => {
    if (dataProductDetail?.id) {
      refetchReviews?.(dataProductDetail?.id);
    }
  }, [dataProductDetail]);
  return {
    data: dataProductDetail,
    loading: loadingProductDetail,
    err: errorProductDetail,
    formDetailData: productDetailForm,
    productDetailReviews,
    onAdd,
    onWishList,
  };
};
