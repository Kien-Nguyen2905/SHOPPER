import React from "react";
import FormCheckout from "./Components/FormCheckout";

const CheckoutPage = () => {
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
            <div className="checkout-discount">
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  required
                  id="checkout-discount-input"
                />
                <label
                  htmlFor="checkout-discount-input"
                  className="text-truncate"
                >
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div>
            {/* <FormCheckout /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
