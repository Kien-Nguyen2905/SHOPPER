import { removeCart } from "@/store/middleware/cartMiddleware";
import { authActions } from "@/store/reducers/authReducer";
import { cartActions } from "@/store/reducers/cartReducer";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useMainContext } from "../Maincontext/MainContext";

const useHeader = () => {
  const dispatch = useDispatch();
  const { openModal, getCategory } = useMainContext();
  const { profile } = useSelector((state) => state.auth);
  const { cartInfo } = useSelector((state) => state.cart);
  const list = profile?.whiteList?.length || 0;
  const onLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
  };
  const onRemoveProduct = (productId) => {
    if (productId) {
      dispatch(removeCart(productId));
      message.success("Successfully");
    } else {
      message.error("Failed");
    }
  };
  const headerMiddleProps = {
    products: cartInfo.product?.map((product, index) => {
      return {
        ...product,
        quantity: cartInfo.quantity?.[index] || "1",
      };
    }),
    getCategory,
    total: cartInfo.total,
    totalProduct: Number(cartInfo.totalProduct?.[0]) || 0,
    onRemoveProduct,
  };
  return { openModal, profile, onLogout, list, headerMiddleProps };
};

export default useHeader;
