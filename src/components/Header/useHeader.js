import { PATHS } from "@/constants/pathname";
import useDebounce from "@/hooks/useDebounce";
import { getCart, removeCart } from "@/store/middleware/cartMiddleware";
import { authActions } from "@/store/reducers/authReducer";
import { cartActions } from "@/store/reducers/cartReducer";
import { message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useMainContext } from "../Maincontext/MainContext";
import { MESSAGE } from "@/constants/message";

const useHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    openModal,
    getCategory,
    openModalMobile,
    isOpenSearch,
    setIsOpenSearch,
  } = useMainContext();
  const { profile } = useSelector((state) => state.auth);
  const { cartInfo } = useSelector((state) => state.cart);
  const list = profile?.whiteList?.length || 0;
  const [search, setSearch] = useState();
  const debounceSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debounceSearch !== undefined) {
      navigate(PATHS.PRODUCT + `?search=${debounceSearch}`);
    }
  }, [debounceSearch]);

  const onSearch = (e) => {
    setSearch(e.target?.value || "");
  };
  useEffect(() => {
    setIsOpenSearch(false);
  }, [pathname]);
  const onLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
  };
  const onRemoveProduct = (productId) => {
    if (productId) {
      dispatch(removeCart(productId));
      dispatch(getCart());
      message.success(MESSAGE.ROMOVESUCCESS);
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
    openModalMobile,
    isOpenSearch,
    setIsOpenSearch,
    onSearch,
    search,
  };
  return { openModal, profile, onLogout, list, headerMiddleProps };
};

export default useHeader;
