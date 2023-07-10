import React from "react";
import FeaturedProduct from "./Components/FeaturedProduct";
import Intro from "./Components/Intro";
import { useHomePage } from "./useHomePage";

const HomePage = () => {
  const { products, onProduct, categories } = useHomePage();
  return (
    <main className="main">
      <Intro />
      <div className="container featured">
        <ul
          className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="products-featured-link"
              data-toggle="tab"
              href="#products-featured-tab"
              role="tab"
              aria-controls="products-featured-tab"
              aria-selected="true"
            >
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-sale-link"
              data-toggle="tab"
              href="#products-sale-tab"
              role="tab"
              aria-controls="products-sale-tab"
              aria-selected="false"
            >
              On Sale
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="products-top-link"
              data-toggle="tab"
              href="#products-top-tab"
              role="tab"
              aria-controls="products-top-tab"
              aria-selected="false"
            >
              Top Rated
            </a>
          </li>
        </ul>
        <div className="tab-content tab-content-carousel">
          <div
            className="tab-pane p-0 fade show active"
            id="products-featured-tab"
            role="tabpanel"
            aria-labelledby="products-featured-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                                      "nav": true, 
                                                      "dots": true,
                                                      "margin": 20,
                                                      "loop": false,
                                                      "responsive": {
                                                          "0": {
                                                              "items":2
                                                          },
                                                          "600": {
                                                              "items":2
                                                          },
                                                          "992": {
                                                              "items":3
                                                          },
                                                          "1200": {
                                                              "items":4
                                                          }
                                                      }
                                                  }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price"> $349.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-3/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  <div className="product-price"> $214.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "0%" }} />
                    </div>
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out of Stock</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 3 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  <div className="product-price"> $499.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "70%" }} />
                    </div>
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price"> $349.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="products-sale-tab"
            role="tabpanel"
            aria-labelledby="products-sale-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                                      "nav": true, 
                                                      "dots": true,
                                                      "margin": 20,
                                                      "loop": false,
                                                      "responsive": {
                                                          "0": {
                                                              "items":2
                                                          },
                                                          "600": {
                                                              "items":2
                                                          },
                                                          "992": {
                                                              "items":3
                                                          },
                                                          "1200": {
                                                              "items":4
                                                          }
                                                      }
                                                  }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  <div className="product-price"> $499.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "70%" }} />
                    </div>
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price"> $349.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out of Stock</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 3 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-3/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  <div className="product-price"> $214.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "0%" }} />
                    </div>
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="products-top-tab"
            role="tabpanel"
            aria-labelledby="products-top-link"
          >
            <div
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                                      "nav": true, 
                                                      "dots": true,
                                                      "margin": 20,
                                                      "loop": false,
                                                      "responsive": {
                                                          "0": {
                                                              "items":2
                                                          },
                                                          "600": {
                                                              "items":2
                                                          },
                                                          "992": {
                                                              "items":3
                                                          },
                                                          "1200": {
                                                              "items":4
                                                          }
                                                      }
                                                  }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-3.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">Lenovo - 330-15IKBR 15.6"</a>
                  </h3>
                  <div className="product-price">
                    <span className="out-price">$339.99</span>
                    <span className="out-text">Out of Stock</span>
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 3 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price"> $349.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Sony - Alpha a5100 Mirrorless Camera
                    </a>
                  </h3>
                  <div className="product-price"> $499.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "70%" }} />
                    </div>
                    <span className="ratings-text">( 11 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <span className="product-label label-circle label-new">
                    New
                  </span>
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-2.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-3/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Apple - Apple Watch Series 3 with White Sport Band
                    </a>
                  </h3>
                  <div className="product-price"> $214.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "0%" }} />
                    </div>
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                </div>
              </div>
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product-detail.html">
                    <img
                      src="assets/images/demos/demo-3/products/product-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>
                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  <div className="product-action product-action-dark">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                  </div>
                </figure>
                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      GoPro - HERO7 Black HD Waterproof Action
                    </a>
                  </h3>
                  <div className="product-price"> $349.99 </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div className="ratings-val" style={{ width: "60%" }} />
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 mb-lg-11" />
      <div className="bg-light deal-container pt-7 pb-7 mb-5">
        <div className="container">
          <div className="heading text-center mb-4">
            <h2 className="title">Deals &amp; Outlet</h2>
            <p className="title-desc">Today’s deal and more</p>
          </div>
          <div className="row">
            <div className="col-lg-6 deal-col">
              <div
                className="deal"
                style={{
                  backgroundImage:
                    'url("/assets/images/demos/demo-3/deal/bg-1.jpg")',
                }}
              >
                <div className="deal-top">
                  <h2>Deal of the Day.</h2>
                  <h4>Limited quantities. </h4>
                </div>
                <div className="deal-content">
                  <h3 className="product-title">
                    <a href="product-detail.html">
                      Home Smart Speaker with Google Assistant
                    </a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">$129.00</span>
                    <span className="old-price">Was $150.99</span>
                  </div>
                  <a href="product-detail.html" className="btn btn-link">
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right" />
                  </a>
                </div>
                <div className="deal-bottom">
                  <div className="deal-countdown" data-until="+10h" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="products">
                <div className="row">
                  <div className="col-6">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product-detail.html">
                          <img
                            src="assets/images/demos/demo-3/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            Canon - EOS 5D Mark IV DSLR Camera
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$3,599.99</span>
                          <span className="old-price">Was $3,999.99</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product-detail.html">
                          <img
                            src="assets/images/demos/demo-3/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            Apple - Smart Keyboard Folio for 11-inch iPad Pro
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$179.00</span>
                          <span className="old-price">Was $200.99</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-container text-center mt-3 mb-0">
            <a href="#" className="btn btn-outline-dark-2 btn-round btn-more">
              <span>Shop more</span>
              <i className="icon-long-arrow-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="owl-carousel mt-5 mb-5 owl-simple"
          data-toggle="owl"
          data-owl-options='{
                                                  "nav": false, 
                                                  "dots": false,
                                                  "margin": 30,
                                                  "loop": false,
                                                  "responsive": {
                                                      "0": {
                                                          "items":2
                                                      },
                                                      "420": {
                                                          "items":3
                                                      },
                                                      "600": {
                                                          "items":4
                                                      },
                                                      "900": {
                                                          "items":5
                                                      },
                                                      "1024": {
                                                          "items":6
                                                      }
                                                  }
                                              }'
        >
          <a href="#" className="brand">
            <img src="assets/images/brands/1.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/2.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/3.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/4.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/5.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="assets/images/brands/6.png" alt="Brand Name" />
          </a>
        </div>
      </div>
      <div className="container">
        <hr className="mt-3 mb-6" />
      </div>
      <div className="container">
        <hr className="mt-5 mb-6" />
      </div>
      <FeaturedProduct listCategories={categories} data={products} />
      <div className="container">
        <hr className="mt-5 mb-0" />
      </div>
      <div className="icon-boxes-container mt-2 mb-2 bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rocket" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Shipping</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rotate-left" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-info-circle" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                  <p>when you sign up</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-life-ring" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">We Support</h3>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="cta cta-separator cta-border-image cta-half mb-0"
          style={{
            backgroundImage: "url(assets/images/demos/demo-3/bg-2.jpg)",
          }}
        >
          <div className="cta-border-wrapper bg-white">
            <div className="row">
              <div className="col-lg-6">
                <div className="cta-wrapper cta-text text-center">
                  <h3 className="cta-title">Shop Social</h3>
                  <p className="cta-desc">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.{" "}
                  </p>
                  <div className="social-icons social-icons-colored justify-content-center">
                    <a
                      href="#"
                      className="social-icon social-facebook"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-twitter"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-instagram"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-youtube"
                      title="Youtube"
                      target="_blank"
                    >
                      <i className="icon-youtube" />
                    </a>
                    <a
                      href="#"
                      className="social-icon social-pinterest"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-wrapper text-center">
                  <h3 className="cta-title">Get the Latest Deals</h3>
                  <p className="cta-desc">
                    and <br />
                    receive <span className="text-primary">$20 coupon</span> for
                    first shopping{" "}
                  </p>
                  <form action="#">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary btn-rounded"
                          type="submit"
                        >
                          <i className="icon-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-error text-left">
                    Please fill in this field
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
