import React, { useEffect, useState } from "react";
import { MainProvider } from "@/components/Maincontext/MainContext";
import { LOCAL } from "@/constants/localStorage";
import { profileUser } from "@/store/middleware/authMiddleware";
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
import { useSpring, animated } from "@react-spring/web";

const MainLayout = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      libFunc();
      setIsLoading(false);
    }, 500);
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });

    return () => {
      const elementDom = document.querySelector(".zoomContainer");
      elementDom?.remove();
      clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    if (!!localStorage.getItem(LOCAL.token)) {
      dispatch(profileUser());
      dispatch(getCart());
    }
  }, []);

  const springProps = useSpring({
    opacity: isLoading ? 0 : 1,
    from: { opacity: 0 },
  });

  return (
    <MainProvider>
      <animated.div style={springProps}>
        <div className="page-wrapper">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <ButtonScroll />
        <MenuMobileOverlay />
        <MenuMobile />
        <Modal />
      </animated.div>
    </MainProvider>
  );
};

export default MainLayout;
