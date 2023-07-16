import React from "react";
import CategoriseProduct from "./CategoriseProduct";
import OwlCarousel from "react-owl-carousel";
import ProductCart from "@/components/ProductCart/ProductCart";
const FeaturedProduct = ({
  renderProduct,
  categorise,
  listFeaturedProduct,
  cateTab,
}) => {
  const { lisProducts, onChangTab } = renderProduct(listFeaturedProduct);
  return (
    <div className="container top">
      <CategoriseProduct
        tab={categorise}
        slug={cateTab}
        onChangeTab={onChangTab}
      ></CategoriseProduct>
      <div
        className="tab-content tab-content-carousel just-action-icons-sm"
        style={{ minHeight: "490px" }}
      >
        <div
          className={`tab-pane p-0 fade ${
            lisProducts.length > 0 ? "show active" : ""
          }`}
        >
          {lisProducts.length > 0 && (
            <OwlCarousel
              className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
              nav
              dots={false}
              margin={20}
              responsive={{
                0: {
                  items: 2,
                },
                480: {
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

export default FeaturedProduct;
