import { MainProvider } from "@/components/Maincontext/MainContext";
import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ButtonScroll from "../components/ButtonScroll/ButtonScroll";
import Footer from "../components/Foooter/Footer";
import Header from "../components/Header/Header";
import MenuMobile from "../components/Mobile/MenuMobile";
import MenuMobileOverlay from "../components/Mobile/MenuMobileOverlay";
import Modal from "../components/Modal/Modal";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    document.body.appendChild(script);
  }, [pathname]);
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
