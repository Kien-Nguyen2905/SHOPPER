import React from "react";

const BannerText = ({ title }) => {
  return (
    <div
      className="page-header text-center"
      style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
    >
      <div className="container">
        <h1 className="page-title">{title}</h1>
      </div>
    </div>
  );
};

export default BannerText;
