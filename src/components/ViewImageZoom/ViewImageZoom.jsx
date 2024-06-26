import { Empty } from "antd";
import React, { useEffect, useRef } from "react";
import { libFunc } from "@/assets/js/main";
import { cn } from "@/constants/cn";
const ViewImageZoom = ({ images }) => {
  useEffect(() => {
    if (!!images?.length) {
      libFunc();
    }
    return () => {
      const elementDom = document.querySelector(".zoomContainer");
      elementDom?.remove();
    };
  }, [JSON.stringify(images)]);
  return (
    <div className="product-gallery product-gallery-vertical">
      <div className="row">
        <figure className="product-main-image">
          {!!images?.length && (
            <img
              id="product-zoom"
              src={images[0]}
              data-zoom-image={images[0]}
              alt="product image"
            />
          )}
          {!!!images?.length && <Empty />}
          <div id="btn-product-gallery" className="btn-product-gallery">
            <i className="icon-arrows" />
          </div>
        </figure>
        <div id="product-zoom-gallery" className="product-image-gallery">
          {!!images?.length &&
            images.map((img, index) => (
              <a
                key={index}
                className={cn("product-gallery-item", {
                  active: index === 0,
                })}
                href="#"
                data-image={img}
                data-zoom-image={img}
              >
                <img src={img} alt="Dark yellow lace" />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ViewImageZoom;
