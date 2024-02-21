import { AUTHEN_TYPE } from "@/constants/general";
import { LOCAL } from "@/constants/localStorage";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalMb, setIsOpenModalMb] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [authenForm, setAuthenForm] = useState(AUTHEN_TYPE.login);
  const [checkAuthen, setCheckAuthen] = useState(false);
  // openModal handle open form login/register
  const openModal = () => {
    // Checking no token
    if (!!!localStorage.getItem(LOCAL.token)) {
      // setIsOpenModal is true
      setIsOpenModal(!isOpenModal);
      // add class and style
      document.body.className = "modal-open";
      document.body.style = "padding-right: 15px";
    }
  };
  // closeModal hanle close form login/register
  const closeModal = () => {
    // setIsOpenModal is false
    setIsOpenModal(!isOpenModal);
    // setAuthenFrom is type login to hanle
    // when user logout and click again modal still display login before
    setAuthenForm(AUTHEN_TYPE.login);
    // remove class and style
    document.body.className = "";
    document.body.style = "";
  };
  // openModalMobile
  const openModalMobile = () => {
    document.body.className = "mmenu-active";
    setIsOpenModalMb(!isOpenModalMb);
  };
  // check authen
  useEffect(() => {
    if (!!localStorage.getItem(LOCAL.token)) {
      setCheckAuthen(true);
    }
  }, []);
  // closeModalMobile
  const closeModalMobile = () => {
    setIsOpenModalMb(!isOpenModalMb);
    document.body.className = "";
  };
  const value = {
    isOpenModal,
    setIsOpenModal,
    authenForm,
    setAuthenForm,
    openModal,
    closeModal,
    openModal,
    openModalMobile,
    closeModalMobile,
    isOpenModalMb,
    isOpenSearch,
    setIsOpenSearch,
    setCheckAuthen,
    checkAuthen,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
export const useMainContext = () => useContext(MainContext);
