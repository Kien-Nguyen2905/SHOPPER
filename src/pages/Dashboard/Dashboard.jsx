import BannerText from "@/components/Banner/BannerText";
import PageContainer from "@/components/PageContainer/PageContainer";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const Dashboard = () => {
  return (
    <main className="main">
      <BannerText title="My Account" />
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>
      <PageContainer>
        <div className="row">
          <Sidebar />
          <div className="col-md-8 col-lg-9">
            <div className="tab-content">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
};

export default Dashboard;
