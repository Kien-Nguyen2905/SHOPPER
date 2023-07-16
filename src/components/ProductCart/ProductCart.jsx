import { PATHS } from "@/constants/pathname";
import { convertPrice } from "@/utils/covertPrice";
import React from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../Skeleton/SkeletonCard";

const ProductCart = ({ item, isLoading }) => {
  if (isLoading) return <SkeletonCard></SkeletonCard>;
  return (
    <div className="product product-2">
      <figure className="product-media">
        {item?.onSale && (
          <span className="product-label label-circle label-sale">Sale</span>
        )}
        <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={
              !item?.images?.length > 0
                ? `https://thenounproject.com/api/private/icons/1134911/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0`
                : item?.images[0]
            }
            alt="Product image"
            className="product-image"
          />
        </Link>
        <div className="product-action-vertical">
          <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
            <span>add to wishlist</span>
          </a>
        </div>
        <div className="product-action product-action-dark">
          <a href="#" className="btn-product btn-cart" title="Add to cart">
            <span>add to cart</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <h3 className="product-title">
          <a href="product-detail.html">{item?.name}</a>
        </h3>
        <div className="product-price"> {convertPrice(item?.price)} </div>
        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{ width: `${(item?.rating || 0) * 20}%` }}
            />
          </div>
          <span className="ratings-text">( 4 Reviews )</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
