import React from "react";
import { Outlet } from "react-router-dom";

const CustomerLayout = ({ title }) => {
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">{title}</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Payment Methods
            </li>
          </ol>
        </div>
      </nav>
      <Outlet></Outlet>
      <div
        className="cta cta-display bg-image pt-4 pb-4"
        style={{
          backgroundImage: "url(assets/images/backgrounds/cta/bg-7.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9 col-xl-7">
              <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                <div className="col">
                  <h3 className="cta-title text-white">
                    If You Have More Questions
                  </h3>
                  <p className="cta-desc text-white">
                    Quisque volutpat mattis eros
                  </p>
                </div>
                <div className="col-auto">
                  <a href="contact.html" className="btn btn-outline-white">
                    <span>CONTACT US</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomerLayout;
