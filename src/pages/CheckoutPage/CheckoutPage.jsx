import Nav from "@/components/Nav/Nav";
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
      <Nav>
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>Product</Nav.Item>
        <Nav.Item isActive>Checkout</Nav.Item>
      </Nav>
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
