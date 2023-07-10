import { LOCAL } from "@/constants/localStorage";
import { profileUser } from "@/store/middleware/authMiddleWare";
import { authActions } from "@/store/reducers/authReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMainContext } from "../Maincontext/MainContext";

const useHeader = () => {
  const dispatch = useDispatch();
  const { openModal, getCategory } = useMainContext();
  const { profile } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(authActions.logout());
  };
  useEffect(() => {
    if (!!localStorage.getItem(LOCAL.token)) {
      dispatch(profileUser());
    }
  }, []);
  return { openModal, profile, onLogout, getCategory };
};

export default useHeader;
