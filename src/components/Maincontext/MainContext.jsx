import { AUTHEN_TYPE } from "@/constants/general";
import { LOCAL } from "@/constants/localStorage";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalMb, setIsOpenModalMb] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [authenForm, setAuthenForm] = useState(AUTHEN_TYPE.login);
  const [category, setCategory] = useState();
  useEffect(() => {
    getCategory();
  }, []);
  const openModal = () => {
    if (!!!localStorage.getItem(LOCAL.token)) {
      setIsOpenModal(!isOpenModal);
      document.body.className = "modal-open";
      document.body.style = "padding-right: 15px";
    }
  };
  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
    setAuthenForm(AUTHEN_TYPE.login);
    document.body.className = "";
    document.body.style = "";
  };
  const openModalMobile = () => {
    document.body.className = "mmenu-active";
    setIsOpenModalMb(!isOpenModalMb);
  };
  const closeModalMobile = () => {
    setIsOpenModalMb(!isOpenModalMb);
    document.body.className = "";
  };
  const getCategory = (e) => {
    setCategory(e?.currentTarget.textContent);
  };
  const value = {
    isOpenModal,
    setIsOpenModal,
    authenForm,
    setAuthenForm,
    openModal,
    closeModal,
    category,
    setCategory,
    getCategory,
    openModal,
    openModalMobile,
    closeModalMobile,
    isOpenModalMb,
    isOpenSearch,
    setIsOpenSearch,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
export const useMainContext = () => useContext(MainContext);
