import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import useHeader from "./useHeader";

const Header = () => {
  const { headerMiddleProps, ...headerProps } = useHeader();
  return (
    <header className="header">
      <HeaderTop {...headerProps} />
      <HeaderMiddle {...headerMiddleProps} />
    </header>
  );
};

export default Header;
