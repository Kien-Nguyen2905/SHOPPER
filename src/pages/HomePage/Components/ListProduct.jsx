import React from "react";

const ListProduct = ({ data }) => {
  return (
    <>
      {data?.length > 0 &&
        data?.map((item, index) => (
          <div className="product product-2" key={index}>
            <figure className="product-media">
              <a href="product-detail.html">
                <img
                  src="assets/images/demos/demo-3/products/product-11.jpg"
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
                <a href="product-detail.html">{item?.name}</a>
              </h3>
              <div className="product-price"> $1,199.99 </div>
              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "100%" }} />
                </div>
                <span className="ratings-text">( 4 Reviews )</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ListProduct;
