import ProductCart from "@/components/ProductCart/ProductCart";
import { TAB } from "@/constants/tab";
import React from "react";
import OwlCarousel from "react-owl-carousel";
const HotProduct = ({ list, selectTab, renderProduct }) => {
  const { lisProducts, onChangTab } = renderProduct(list);
  return (
    <div className="container featured">
      <ul
        className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className={`nav-link ${selectTab === TAB.FEATURED ? "active" : ""}`}
            data-toggle="tab"
            onClick={() => onChangTab(TAB.FEATURED)}
          >
            Featured
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectTab === TAB.ONSALE ? "active" : ""}`}
            data-toggle="tab"
            onClick={() => onChangTab(TAB.ONSALE)}
          >
            On Sale
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectTab === TAB.RATED ? "active" : ""}`}
            data-toggle="tab"
            onClick={() => onChangTab(TAB.RATED)}
          >
            Top Rated
          </a>
        </li>
      </ul>
      <div
        className="tab-content tab-content-carousel"
        style={{ minHeight: "560px" }}
      >
        <div
          className={`tab-pane p-0 fade ${
            lisProducts?.length > 0 ? "show active" : ""
          }`}
        >
          {lisProducts?.length > 0 && (
            <OwlCarousel
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              nav
              margin={20}
              responsive={{
                0: {
                  items: 2,
                },
                600: {
                  items: 2,
                },
                992: {
                  items: 3,
                },
                1200: {
                  items: 4,
                },
              }}
            >
              {lisProducts?.length > 0 &&
                lisProducts?.map((item, index) => (
                  <ProductCart item={item} key={index} />
                ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotProduct;
