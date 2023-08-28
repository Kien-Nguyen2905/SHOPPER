import { authService } from "@/services/authenService";
import { login } from "@/store/middleware/authMiddleware";
import { unwrapResult } from "@reduxjs/toolkit";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useMainContext } from "../Maincontext/MainContext";

const useModal = () => {
  const dispatch = useDispatch();
  const { isOpenModal, authenForm, closeModal, setAuthenForm } =
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
          message.success("Wellcome");
        }
      } catch (error) {
        console.log(error);
        message.error("Somthing wrong, please try again ! ");
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
        console.log(error);
        message.error("Somthing wrong, please try again ! ");
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
