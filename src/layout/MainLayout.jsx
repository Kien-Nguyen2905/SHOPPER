import React from "react";
import { MainProvider } from "@/components/Maincontext/MainContext";
import { LOCAL } from "@/constants/localStorage";
import { profileUser } from "@/store/middleware/authMiddleware";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import ButtonScroll from "../components/ButtonScroll/ButtonScroll";
import Footer from "../components/Foooter/Footer";
import Header from "../components/Header/Header";
import MenuMobile from "../components/Mobile/MenuMobile";
import MenuMobileOverlay from "../components/Mobile/MenuMobileOverlay";
import Modal from "../components/Modal/Modal";
import { libFunc } from "@/assets/js/main";
import { getCart } from "@/store/middleware/cartMiddleware";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      libFunc();
      setIsLoading(false);
    }, 500);
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!!localStorage.getItem(LOCAL.token)) {
      dispatch(profileUser());
      dispatch(getCart());
    }
  }, []);
  return (
    <MainProvider>
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <ButtonScroll />
      <MenuMobileOverlay />
      <MenuMobile />
      <Modal />
    </MainProvider>
  );
};

export default MainLayout;
