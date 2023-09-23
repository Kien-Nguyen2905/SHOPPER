import React from "react";
import { useMainContext } from "../Maincontext/MainContext";

const MenuMobileOverlay = () => {
  const { closeModalMobile } = useMainContext();
  return (
    <div
      className="mobile-menu-overlay"
      onClick={() => {
        closeModalMobile();
      }}
    ></div>
  );
};

export default MenuMobileOverlay;
