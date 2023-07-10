import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-md-4 col-lg-3">
      <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="tab-account-link"
            data-toggle="tab"
            href="#tab-account"
            role="tab"
            aria-controls="tab-account"
            aria-selected="false"
          >
            Account Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-orders-link"
            data-toggle="tab"
            href="#tab-orders"
            role="tab"
            aria-controls="tab-orders"
            aria-selected="false"
          >
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-address-link"
            data-toggle="tab"
            href="#tab-address"
            role="tab"
            aria-controls="tab-address"
            aria-selected="false"
          >
            Adresses
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-wishlist-link"
            data-toggle="tab"
            href="#tab-wishlist"
            role="tab"
            aria-controls="tab-wishlist"
            aria-selected="false"
          >
            Wishlist
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sign Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
