import { PATHS } from "@/constants/pathname";
import { useQuery } from "@/hooks/useQuery";
import { productService } from "@/services/productService";
import queryString from "query-string";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMainContext } from "../Maincontext/MainContext";
import ShareLink from "../ShareLink/ShareLink";

const MenuMobile = () => {
  const pathUrl = window.location.href;
  const { pathname, search } = useLocation();
  const { closeModalMobile } = useMainContext();
  const queryObject = queryString.parse(search);
  const {
    data: dataCategorise,
    loading: loadingCategorise,
    error: errorCategorise,
  } = useQuery(productService.getCategories);
  const categorise = dataCategorise?.products || [];
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close" onClick={() => closeModalMobile()}>
          <i className="icon-close" />
        </span>
        {/* <form action="#" method="get" className="mobile-search">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            className="form-control"
            name="mobile-search"
            id="mobile-search"
            placeholder="Search in..."
            required
          />
          <button className="btn btn-primary" type="submit">
            <i className="icon-search" />
          </button>
        </form> */}
        <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="mobile-menu-link"
              data-toggle="tab"
              href="#mobile-menu-tab"
              role="tab"
              aria-controls="mobile-menu-tab"
              aria-selected="true"
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="mobile-cats-link"
              data-toggle="tab"
              href="#mobile-cats-tab"
              role="tab"
              aria-controls="mobile-cats-tab"
              aria-selected="false"
            >
              Categories
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="mobile-menu-tab"
            role="tabpanel"
            aria-labelledby="mobile-menu-link"
          >
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li className={`${pathname == "/" ? "active" : ""}`}>
                  <Link to={`${PATHS.HOME}`} onClick={() => closeModalMobile()}>
                    Home
                  </Link>
                </li>
                <li className={`${pathname == "/about" ? "active" : ""}`}>
                  <Link
                    to={`${PATHS.ABOUT}`}
                    onClick={() => closeModalMobile()}
                  >
                    About Us
                  </Link>
                </li>
                <li className={`${pathname == "/product" ? "active" : ""}`}>
                  <Link
                    to={`${PATHS.PRODUCT}`}
                    onClick={() => closeModalMobile()}
                  >
                    Product
                  </Link>
                </li>
                {/* <li className={`${pathname == "/blog" ? "active" : ""}`}>
                  <Link to={`${PATHS.BLOG}`} onClick={() => closeModalMobile()}>
                    Blog
                  </Link>
                </li> */}
                <li className={`${pathname == "/contact" ? "active" : ""}`}>
                  <Link
                    to={`${PATHS.CONTACT}`}
                    onClick={() => closeModalMobile()}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End .mobile-nav */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane fade"
            id="mobile-cats-tab"
            role="tabpanel"
            aria-labelledby="mobile-cats-link"
          >
            <nav className="mobile-cats-nav">
              <ul className="mobile-cats-menu">
                {categorise &&
                  categorise?.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`${PATHS.PRODUCT}?category=${item?.id}&limit=9&page=1`}
                        className={`${
                          queryObject["category"] == item?.id
                            ? "mobile-cats-lead"
                            : ""
                        }`}
                        onClick={() => closeModalMobile()}
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
              </ul>
              {/* End .mobile-cats-menu */}
            </nav>
            {/* End .mobile-cats-nav */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}

        <div className="social-icons">
          <ShareLink title={"Facebook"} path={pathUrl}>
            <i className="icon-facebook-f" />
          </ShareLink>
          <ShareLink type="twitter" title={"Twitter"} path={pathUrl}>
            <i className="icon-twitter" />
          </ShareLink>
          <ShareLink type="instagram" title={"Instagram"} path={pathUrl}>
            <i className="icon-instagram" />
          </ShareLink>
          <ShareLink type="pinterest" title={"Pinterest"} path={pathUrl}>
            <i className="icon-pinterest" />
          </ShareLink>
        </div>
        {/* End .social-icons */}
      </div>
      {/* End .mobile-menu-wrapper */}
    </div>
  );
};

export default MenuMobile;
