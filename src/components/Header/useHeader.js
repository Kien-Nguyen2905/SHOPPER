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
  // get pathname
  const { pathname } = useLocation();
  const {
    openModal,
    getCategory,
    openModalMobile,
    isOpenSearch,
    setIsOpenSearch,
    setCheckAuthen,
  } = useMainContext();
  const { profile } = useSelector((state) => state.auth);
  const { cartInfo } = useSelector((state) => state.cart);
  const list = profile?.whiteList?.length || 0;
  const [search, setSearch] = useState();
  // using useDebounce hanle user type search
  const debounceSearch = useDebounce(search, 500);
  // hanle searching
  useEffect(() => {
    if (debounceSearch !== undefined) {
      navigate(PATHS.PRODUCT + `?search=${debounceSearch}`);
    }
  }, [debounceSearch]);
  // get value search
  const onSearch = (e) => {
    setSearch(e.target?.value || "");
  };
  // when pathname change close input search
  useEffect(() => {
    setIsOpenSearch(false);
  }, [pathname]);
  // onLogout
  const onLogout = () => {
    // dispatch action logout to store
    dispatch(authActions.logout());
    // set state checkAuthen
    setCheckAuthen(false);
    // dispatch action set cart empty
    dispatch(cartActions.clearCart());
  };
  // onRemoveProduct
  const onRemoveProduct = (productId) => {
    // Checking exist productid
    if (productId) {
      // dispatch action remove cart by id
      dispatch(removeCart(productId));
      // get cart after remove cart
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
