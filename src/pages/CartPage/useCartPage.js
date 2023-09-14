import { SHIPPING_OPTIONS, THUNK_STATUS } from "@/constants/general";
import { updateCart } from "@/store/middleware/cartMiddleware";
import { message } from "antd";
import { useState } from "react";
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
        const newProduct = updateProducts?.map((product) => {
          return product.id;
        });
        const newQuantity = updateProducts?.map((product) => {
          return product.quantity;
        });
        updatePayload = {
          ...cartInfo,
          product: newProduct,
          quantity: newQuantity,
        };
        await dispatch(updateCart(updatePayload)).unwrap();
      } catch (error) {
        console.log("error", error);
        message.error("Failed");
      }
    }
  };
  const onUpdateShip = async (value) => {
    const selectShip = SHIPPING_OPTIONS?.find((item) => item.value === value);
    if (cartInfo?.id && updateStatus !== THUNK_STATUS.pending && selectShip) {
      try {
        const updateShipProducts = products?.map((item) => item?.id);
        console.log(updateShipProducts);
        let newPayload = {
          ...cartInfo,
          product: updateShipProducts,
          shipping: {
            typeShip: selectShip.value,
            price: selectShip.price,
          },
        };
        console.log("payload", newPayload);
        await dispatch(updateCart(newPayload)).unwrap();
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const totalProps = {
    subTotal: cartInfo?.subTotal,
    total: cartInfo?.total,
    typeShip: cartInfo?.shipping?.typeShip,
    onUpdateShip,
  };
  return { products, onUpdateQuantity, totalProps };
};
export default useCartPage;
