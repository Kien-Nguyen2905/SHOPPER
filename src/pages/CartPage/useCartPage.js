import { SHIPPING_OPTIONS, THUNK_STATUS } from "@/constants/general";
import { removeCart, updateCart } from "@/store/middleware/cartMiddleware";
import { message } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCartPage = () => {
  const dispatch = useDispatch();
  const { cartInfo, updateStatus } = useSelector((state) => state.cart);
  const products = cartInfo.product?.map((item, index) => ({
    ...item,
    quantity: cartInfo?.quantity[index],
  }));
  const onUpdateQuantity = async (updateValue, updateIndex) => {
    const updateProducts =
      products?.map((product, index) => {
        return updateIndex === index
          ? {
              ...product,
              quantity: String(updateValue),
            }
          : { ...product };
      }) || [];
    if (
      cartInfo?.id &&
      updateStatus !== THUNK_STATUS.pending &&
      updateProducts.length > 0
    ) {
      try {
        let updatePayload = {};
        const product = updateProducts?.map((product) => {
          return product.id;
        });
        const newQuantity = updateProducts?.map((product) => {
          return product.quantity;
        });
        updatePayload = {
          ...cartInfo,
          product: product,
          quantity: newQuantity,
        };
        const n = await dispatch(updateCart(updatePayload)).unwrap();
        console.log(n);
      } catch (error) {
        console.log("error", error);
        message.error("Failed");
      }
    }
  };
  const onUpdateShip = async (value) => {
    let selectShip = SHIPPING_OPTIONS?.find((item) => item.value === value) || {
      value: "reset",
      label: "",
      price: 0,
    };
    if (cartInfo?.id && updateStatus !== THUNK_STATUS.pending && selectShip) {
      try {
        const updateShipProducts = products?.map((item) => item?.id);
        let newPayload = {
          ...cartInfo,
          product: updateShipProducts,
          shipping: {
            typeShip: selectShip.value,
            price: selectShip.price,
          },
        };
        await dispatch(updateCart(newPayload)).unwrap();
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const onRemoveProduct = (productId) => {
    if (productId) {
      dispatch(removeCart(productId));
      message.success("Successfully");
    } else {
      message.error("Failed");
    }
  };
  useEffect(() => {
    if (cartInfo?.product?.length <= 0) {
      onUpdateShip("reset");
    }
  }, [cartInfo?.product?.length == 0]);
  const totalProps = {
    subTotal: cartInfo?.subTotal,
    total: cartInfo?.total,
    typeShip: cartInfo?.shipping?.typeShip,
    onUpdateShip,
  };
  return { products, onUpdateQuantity, totalProps, onRemoveProduct };
};
export default useCartPage;
