import React from "react";

const Banner = ({ children, bg = "" }) => {
  return (
    <div className="container">
      <div
        className="page-header page-header-big text-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Banner;
