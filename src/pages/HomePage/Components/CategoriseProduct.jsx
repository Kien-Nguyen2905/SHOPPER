import React from "react";
import { NavLink } from "react-router-dom";

const CategoriseProduct = ({ tab }) => {
  return (
    <div className="heading heading-flex mb-3">
      <div className="heading-left">
        <h2 className="title">Featured Products</h2>
      </div>
      <div className="heading-right">
        <ul
          className="nav nav-pills nav-border-anim justify-content-center"
          role="tablist"
        >
          <NavLink
            className="nav-link active"
            id="top-all-link"
            data-toggle="tab"
            role="tab"
          >
            All
          </NavLink>
          {tab?.products?.length > 0 &&
            tab?.products?.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  className="nav-link"
                  id="top-all-link"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="top-all-tab"
                  aria-selected="true"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          {/* <li className="nav-item">
            <a
              className="nav-link active"
              id="top-all-link"
              data-toggle="tab"
              href="#top-all-tab"
              role="tab"
              aria-controls="top-all-tab"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-tv-link"
              data-toggle="tab"
              href="#top-tv-tab"
              role="tab"
              aria-controls="top-tv-tab"
              aria-selected="false"
            >
              TV
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-computers-link"
              data-toggle="tab"
              href="#top-computers-tab"
              role="tab"
              aria-controls="top-computers-tab"
              aria-selected="false"
            >
              Computers
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-phones-link"
              data-toggle="tab"
              href="#top-phones-tab"
              role="tab"
              aria-controls="top-phones-tab"
              aria-selected="false"
            >
              Tablets &amp; Cell Phones
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-watches-link"
              data-toggle="tab"
              href="#top-watches-tab"
              role="tab"
              aria-controls="top-watches-tab"
              aria-selected="false"
            >
              Smartwatches
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="top-acc-link"
              data-toggle="tab"
              href="#top-acc-tab"
              role="tab"
              aria-controls="top-acc-tab"
              aria-selected="false"
            >
              Accessories
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default CategoriseProduct;
