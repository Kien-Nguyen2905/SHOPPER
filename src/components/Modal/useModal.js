import { authService } from "@/services/authenService";
import { login } from "@/store/middleware/authMiddleware";
import { unwrapResult } from "@reduxjs/toolkit";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useMainContext } from "../Maincontext/MainContext";

const useModal = () => {
  const dispatch = useDispatch();
  const { isOpenModal, authenForm, closeModal, setAuthenForm, setCheckAuthen } =
    useMainContext();
  const onChangeTab = (tab) => {
    setAuthenForm(tab);
  };
  const onClose = () => {
    closeModal();
  };
  const onLogin = async (values) => {
    if (values?.email) {
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };
        const res = await dispatch(login(payload));
        const resProfile = unwrapResult(unwrapResult(res));
        if (values.remember) {
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
          localStorage.setItem("remember", values.remember);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          localStorage.removeItem("remember");
        }
        if (resProfile?.id) {
          onClose();
          setCheckAuthen(true);
          message.success("Wellcome");
        }
      } catch (error) {
        console.log(error);
        message.error(error?.message);
      }
    }
  };
  const onRegister = async (values) => {
    if (values?.email) {
      try {
        const payload = {
          firstName: "",
          lastName: "",
          email: values.email,
          password: values.password,
        };
        const res = await authService.authRegister(payload);
        if (res?.id) {
          onLogin({
            email: payload.email,
            password: payload.password,
          });
        }
      } catch (error) {
        if (error.response.status === 403 || error.response.data.message) {
          message.error("Email is already registered");
        } else {
          message.error("Somthing wrong, please try again ! ");
        }
        console.log(error);
      }
    }
  };
  return {
    onChangeTab,
    onClose,
    onLogin,
    onRegister,
    isOpen: isOpenModal,
    activeTab: authenForm,
  };
};

export default useModal;
