import React from "react";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import useHeader from "./useHeader";

const Header = () => {
  const { getCategory, ...headerProps } = useHeader();
  return (
    <header className="header">
      <HeaderTop {...headerProps} />
      <HeaderMiddle onText={getCategory} />
    </header>
  );
};

export default Header;
