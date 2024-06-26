import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../constants/pathname";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-5">
              <div className="widget widget-about">
                <img
                  src="/assets/images/logo.svg"
                  className="footer-logo"
                  alt="Footer Logo"
                  width={120}
                />
                <p>
                  CFDShop is a project developed by students in the Frontend
                  Master course Reactjs Master phase at CFD Circle
                </p>
                <div className="widget-call">
                  <i className="icon-phone" /> Got Question? Call us 24/7
                  <a href="tel:#">098 9596 912</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 offset-lg-1">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="widget-list">
                  <li>
                    <NavLink to={PATHS.ABOUT}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRODUCT}>Product</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.FAG}>FAQs</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.CONTACT}>Contact us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-list">
                  <li>
                    <NavLink to={PATHS.PAYMENT}>Payment Methods</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.RETURN}>Returns</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.SHIPPING}>Shipping</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRIVACY}>Privacy Policy</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="widget-list">
                  <li>
                    <Link to={PATHS.DASHBOARD.INDEX}>Account Details</Link>
                  </li>
                  <li>
                    <Link to={PATHS.CART}>View Cart</Link>
                  </li>
                  <li>
                    <Link to={PATHS.DASHBOARD.WISHLIST}>My Wishlist</Link>
                  </li>
                  <li>
                    <Link to={PATHS.DASHBOARD.ORDER}>Track My Order</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2023-
            <a href="https://cfdcircle.vn/" target="_blank">
              <strong>CFD Circle</strong>
            </a>
            . All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <img
              src="/assets/images/payments.png"
              alt="Payment methods"
              width={272}
              height={20}
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
