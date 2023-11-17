import Nav from "@/components/Nav/Nav";
import QuantityInput from "@/components/QuantityInput/QuantityInput";
import ShareLink from "@/components/ShareLink/ShareLink";
import ViewImageZoom from "@/components/ViewImageZoom/ViewImageZoom";
import { PATHS } from "@/constants/pathname";
import { convertPrice } from "@/utils/covertPrice";
import React from "react";
import { Link } from "react-router-dom";
import { useProductDetail } from "./useProductDetail";
import ProductReview from "./ProductReview";
import Tab from "@/components/Tab/Tab";

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
          {/* <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-desc-link"
                  data-toggle="tab"
                  href="#product-desc-tab"
                  role="tab"
                  aria-controls="product-desc-tab"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-shipping-link"
                  data-toggle="tab"
                  href="#product-shipping-tab"
                  role="tab"
                  aria-controls="product-shipping-tab"
                  aria-selected="false"
                >
                  Shipping &amp; Returns
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-review-link"
                  data-toggle="tab"
                  href="#product-review-tab"
                  role="tab"
                  aria-controls="product-review-tab"
                  aria-selected="false"
                >
                  Reviews (2)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-desc-tab"
                role="tabpanel"
                aria-labelledby="product-desc-link"
              >
                <div className="product-desc-content">
                  <h3>Product Information</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.{" "}
                  </p>
                  <ul>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.{" "}
                    </li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>
                      Nullam a magna porttitor, dictum risus nec, faucibus
                      sapien.
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.{" "}
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-shipping-tab"
                role="tabpanel"
                aria-labelledby="product-shipping-link"
              >
                <div className="product-desc-content">
                  <h3>Delivery &amp; returns</h3>
                  <p>
                    We deliver to over 100 countries around the world. For full
                    details of the delivery options we offer, please view our{" "}
                    <a href="#">Delivery information</a>
                    <br /> We hope you’ll love every purchase, but if you ever
                    need to return an item you can do so within a month of
                    receipt. For full details of how to make a return, please
                    view our <a href="#">Returns information</a>
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="product-review-tab"
                role="tabpanel"
                aria-labelledby="product-review-link"
              >
                <div className="reviews">
                  <h3>Reviews (2)</h3>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">Samanta J.</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        <span className="review-date">6 days ago</span>
                      </div>
                      <div className="col">
                        <h4>Good, perfect size</h4>
                        <div className="review-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus cum dolores assumenda asperiores
                            facilis porro reprehenderit animi culpa atque
                            blanditiis commodi perspiciatis doloremque,
                            possimus, explicabo, autem fugit beatae quae
                            voluptas!
                          </p>
                        </div>
                        <div className="review-action">
                          <a href="#">
                            <i className="icon-thumbs-up" />
                            Helpful (2){" "}
                          </a>
                          <a href="#">
                            <i className="icon-thumbs-down" />
                            Unhelpful (0){" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">John Doe</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <span className="review-date">5 days ago</span>
                      </div>
                      <div className="col">
                        <h4>Very good</h4>
                        <div className="review-content">
                          <p>
                            Sed, molestias, tempore? Ex dolor esse iure hic
                            veniam laborum blanditiis laudantium iste amet. Cum
                            non voluptate eos enim, ab cumque nam, modi, quas
                            iure illum repellendus, blanditiis perspiciatis
                            beatae!
                          </p>
                        </div>
                        <div className="review-action">
                          <a href="#">
                            <i className="icon-thumbs-up" />
                            Helpful (0){" "}
                          </a>
                          <a href="#">
                            <i className="icon-thumbs-down" />
                            Unhelpful (0){" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
                <ProductReview reviews={productDetailReviews?.reverse()} />
              </Tab.ContentItem>
            </Tab.Content>
          </Tab>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
