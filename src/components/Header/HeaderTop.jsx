import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = ({ openModal, profile, onLogout, list }) => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:0989596912">
            <i className="icon-phone" /> Hotline: 098 9596 912
          </a>
        </div>
        <div className="header-right">
          {/* when user has profile display profile account otherwise display modal login/register */}
          {profile ? (
            <ul className="top-menu">
              <li>
                <a className="top-link-menu">
                  <i className="icon-user"></i>
                  {/* Firstly time login user will be Guest */}
                  {!profile?.firstName ? "Guest" : profile?.firstName}
                </a>
                <ul>
                  <li>
                    <ul>
                      <li>
                        {/* Routing page */}
                        <Link to={PATHS.DASHBOARD.INDEX}>Account Details</Link>
                      </li>
                      <li>
                        <Link to={PATHS.DASHBOARD.ORDER}>Your Orders</Link>
                      </li>
                      <li>
                        <Link to={PATHS.DASHBOARD.WISHLIST}>
                          Wishlist <span>{`(${list})`}</span>
                        </Link>
                      </li>
                      <li>
                        {/* Logout */}
                        <a onClick={onLogout}>Sign Out</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className="top-menu top-link-menu">
              <li>
                {/* openModal */}
                <a className="top-menu-login" onClick={openModal}>
                  <i className="icon-user" />
                  Login | Resgister
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
