import React from "react";
import BillingDetail from "./Components/BillingDetail";
import CouponCheckout from "./Components/CuponCheckout";
import SummaryCheckout from "./Components/SummaryCheckout";
import { useCheckout } from "./useCheckout";

const CheckoutPage = () => {
  const { couponProps, billingProps, summaryProps } = useCheckout();
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Checkout</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="product.html">Product</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <CouponCheckout {...couponProps}></CouponCheckout>
            <div className="checkout-form">
              <div className="row">
                <BillingDetail {...billingProps} />
                <SummaryCheckout {...summaryProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
