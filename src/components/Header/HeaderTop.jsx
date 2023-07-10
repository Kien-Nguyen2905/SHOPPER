import React from "react";

const HeaderTop = ({ openModal, profile, onLogout }) => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:0989596912">
            <i className="icon-phone" /> Hotline: 098 9596 912
          </a>
        </div>
        <div className="header-right">
          {profile ? (
            <ul className="top-menu">
              <li>
                <a className="top-link-menu">
                  <i className="icon-user"></i>
                  {profile?.name || "Guest"}
                </a>
                <ul>
                  <li>
                    <ul>
                      <li>
                        <a href="dashboard.html">Account Details</a>
                      </li>
                      <li>
                        <a href="dashboard.html">Your Orders</a>
                      </li>
                      <li>
                        <a href="dashboard.html">
                          Wishlist <span>(3)</span>
                        </a>
                      </li>
                      <li>
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
