import Nav from "@/components/Nav/Nav";
import QuantityInput from "@/components/QuantityInput/QuantityInput";
import ShareLink from "@/components/ShareLink/ShareLink";
import ViewImageZoom from "@/components/ViewImageZoom/ViewImageZoom";
import { PATHS } from "@/constants/pathname";
import { convertPrice } from "@/utils/covertPrice";
import React from "react";
import { Link } from "react-router-dom";
import { useProductDetail } from "./useProductDetail";
import Tab from "@/components/Tab/Tab";
import ProductReview from "./ProductReview";

const ProductDetail = () => {
  const pathUrl = window.location.href;
  const {
    data,
    loading,
    error,
    formDetailData,
    onAdd,
    onWishList,
    productDetailReviews,
  } = useProductDetail();
  console.log(productDetailReviews);
  const {
    category,
    id,
    description,
    shippingReturn,
    images,
    color,
    name,
    price,
    rating,
    stock,
  } = data || {};
  return (
    <main className="main">
      <Nav>
        <Nav.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={PATHS.PRODUCT}>Product</Link>
        </Nav.Item>
        <Nav.Item>{name}</Nav.Item>
      </Nav>
      <div className="page-content">
        <div className="container">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                <ViewImageZoom images={images ?? []} />
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title"> {name}</h1>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: `${(rating || 0) * 20}%` }}
                      />
                    </div>
                    <a
                      className="ratings-text"
                      href="#product-review-link"
                      id="review-link"
                    >
                      ( 2 Reviews )
                    </a>
                  </div>
                  <div className="product-price"> {convertPrice(price)} </div>
                  <div
                    className="product-content"
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></div>
                  <div className="details-filter-row details-row-size">
                    <label>Color:</label>
                    <div className="product-nav product-nav-dots">
                      {color?.map((item, index) => (
                        <div
                          key={index}
                          className={`product-nav-item ${
                            formDetailData.getValues("color") === item
                              ? "active"
                              : ""
                          }`}
                          style={{
                            background: `${item}`,
                          }}
                          onClick={() => formDetailData.setValue("color", item)}
                        >
                          <span className="sr-only">Color name</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="details-filter-row details-row-size">
                    <label htmlFor="qty">Qty:</label>
                    <div className="product-details-quantity">
                      <QuantityInput
                        value={formDetailData.watch("quantity")}
                        max={stock}
                        onChange={(value) =>
                          formDetailData.setValue("quantity", value)
                        }
                      ></QuantityInput>
                    </div>
                  </div>
                  <div className="product-details-action">
                    <a
                      className="btn-product btn-cart"
                      onClick={() =>
                        onAdd(formDetailData.watch("quantity"), id)
                      }
                    >
                      <span>add to cart</span>
                    </a>
                    <div className="details-action-wrapper">
                      <a
                        className="btn-product btn-wishlist"
                        title="Wishlist"
                        onClick={() => onWishList(id)}
                      >
                        <span>Add to Wishlist</span>
                      </a>
                    </div>
                  </div>
                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">{category?.name}</a>
                    </div>
                    <div
                      style={{ gap: "0 5px" }}
                      className="social-icons social-icons-sm"
                    >
                      <span className="social-label">Share:</span>
                      <ShareLink title={"Facebook"} path={pathUrl}>
                        <i className="icon-facebook-f" />
                      </ShareLink>
                      <ShareLink
                        type="twitter"
                        title={"Twitter"}
                        path={pathUrl}
                      >
                        <i className="icon-twitter" />
                      </ShareLink>
                      <ShareLink
                        type="instagram"
                        title={"Instagram"}
                        path={pathUrl}
                      >
                        <i className="icon-instagram" />
                      </ShareLink>
                      <ShareLink
                        type="pinterest"
                        title={"Pinterest"}
                        path={pathUrl}
                      >
                        <i className="icon-pinterest" />
                      </ShareLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab>
            <Tab.Header>
              <Tab.HeaderItem>Description</Tab.HeaderItem>
              <Tab.HeaderItem>Shipping &amp; Returns</Tab.HeaderItem>
              <Tab.HeaderItem>
                Reviews ({productDetailReviews?.length})
              </Tab.HeaderItem>
            </Tab.Header>
            <Tab.Content>
              <Tab.ContentItem>
                <div
                  className="product-desc-content"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </Tab.ContentItem>
              <Tab.ContentItem>
                <div
                  className="product-desc-content"
                  dangerouslySetInnerHTML={{
                    __html: shippingReturn,
                  }}
                />
              </Tab.ContentItem>
              <Tab.ContentItem>
                <ProductReview reviews={productDetailReviews} />
              </Tab.ContentItem>
            </Tab.Content>
          </Tab>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
