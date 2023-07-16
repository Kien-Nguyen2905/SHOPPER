import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
const BrandProduct = ({ listBrand }) => {
  return (
    <div className="container">
      {listBrand?.length > 0 && (
        <OwlCarousel
          className="owl-carousel mt-5 mb-5 owl-simple"
          margin={10}
          dots={false}
          loop={false}
          responsive={{
            0: {
              items: 2,
            },
            420: {
              items: 3,
            },
            600: {
              items: 4,
            },
            900: {
              items: 5,
            },
            1024: {
              items: 6,
            },
          }}
        >
          {listBrand?.length > 0 &&
            listBrand?.map((item, index) => (
              <Link className="brand" key={index}>
                <img src={item} alt="Brand Name" />
              </Link>
            ))}
        </OwlCarousel>
      )}
    </div>
  );
};

export default BrandProduct;
