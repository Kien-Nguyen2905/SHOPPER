import ProductCart from "@/components/ProductCart/ProductCart";
import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link } from "react-router-dom";

const DealProduct = ({ list }) => {
  console.log(list);
  let listDeal = [list[0], list[1]];
  return (
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
                <Link to={PATHS.PRODUCT} className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right" />
                </Link>
              </div>
              <div className="deal-bottom">
                <div className="deal-countdown" data-until="+10h" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="products">
              <div className="row">
                {listDeal?.length > 0 &&
                  listDeal?.map((item, index) => (
                    <div className="col-6">
                      <ProductCart key={index} item={item}></ProductCart>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="more-container text-center mt-3 mb-0">
          <Link
            to={PATHS.PRODUCT}
            className="btn btn-outline-dark-2 btn-round btn-more"
          >
            <span>Shop more</span>
            <i className="icon-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DealProduct;
