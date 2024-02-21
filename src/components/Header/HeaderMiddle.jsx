import { convertPrice } from "@/utils/covertPrice";
import { Modal } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../constants/pathname";

const HeaderMiddle = ({
  total,
  totalProduct,
  products,
  onRemoveProduct,
  openModalMobile,
  isOpenModalMb,
  isOpenSearch,
  setIsOpenSearch,
  onSearch,
  search,
}) => {
  // Add modal confirm form ant design
  const { confirm } = Modal;
  const onRemoveProductClick = (product) => {
    confirm({
      title: "Do you want remove this item from cart?",
      content: (
        <>
          <p>{`${product?.name || ""}`}</p>
          <p>{`${product?.quantity} x ${product?.price}`}</p>
        </>
      ),
      onOk() {
        onRemoveProduct?.(product?.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <div className="header-middle sticky-header">
      <div className="container">
        <div className="header-left">
          <button
            className={`mobile-menu-toggler ${isOpenModalMb ? "active" : ""}`}
          >
            <span className="sr-only">Toggle mobile menu</span>
            <i className="icon-bars" onClick={() => openModalMobile()} />
          </button>
          <Link to={PATHS.HOME} className="logo">
            <img src="/assets/images/logo.svg" alt="Molla Logo" width={160} />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="menu">
            {/* Routing page */}
            <li>
              <NavLink to={PATHS.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.ABOUT}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.PRODUCT}>Product</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.BLOG}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="header-search">
            <a
              onClick={() => setIsOpenSearch(!isOpenSearch)}
              className={`search-toggle ${isOpenSearch ? "active" : ""}`}
              role="button"
              title="Search"
            >
              <i className="icon-search" />
            </a>
            <form action="#" method="get">
              <div
                className={`header-search-wrapper ${
                  isOpenSearch ? "show" : ""
                }`}
              >
                <label htmlFor="q" className="sr-only">
                  Search in...
                </label>
                <input
                  type="search"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search in..."
                  value={search}
                  onChange={onSearch}
                />
              </div>
            </form>
          </div>
          <div className="dropdown cart-dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
            >
              <i className="icon-shopping-cart" />
              <span className="cart-count">{totalProduct || 0}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div
                className="dropdown-cart-products"
                style={{
                  overflowY: "auto",
                  maxHeight: "330px",
                }}
              >
                {products?.length > 0 &&
                  products?.map((item, index) => (
                    <div
                      className="product"
                      key={index}
                      style={{ alignItems: "center" }}
                    >
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
                            {item?.name}
                          </Link>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">
                            {item?.quantity}
                          </span>
                          x {convertPrice(item?.price)}
                        </span>
                      </div>
                      <figure className="product-image-container">
                        <Link
                          to={PATHS.PRODUCT + `/${item?.slug}`}
                          className="product-image"
                        >
                          <img src={item?.images[0]} alt="product" />
                        </Link>
                      </figure>
                      <a
                        style={{ paddingRight: "1rem" }}
                        className="btn-remove"
                        title="Remove Product"
                        onClick={() => onRemoveProductClick(item)}
                      >
                        <i className="icon-close" />
                      </a>
                    </div>
                  ))}
              </div>
              <div style={{ padding: "2.2rem", paddingTop: "0px" }}>
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">
                    {convertPrice(total)}
                  </span>
                </div>
                <div className="dropdown-cart-action">
                  {total > 0 ? (
                    <>
                      <Link to={PATHS.CART} className="btn btn-primary">
                        View Cart
                      </Link>
                      <Link
                        to={PATHS.CHECK_OUT}
                        className="btn btn-outline-primary-2"
                      >
                        <span>Checkout</span>
                        <i className="icon-long-arrow-right" />
                      </Link>
                    </>
                  ) : (
                    <Link to={PATHS.PRODUCT} className="btn btn-primary">
                      No product incart please shopping
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
