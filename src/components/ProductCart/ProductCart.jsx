import { EMPTY, THUNK_STATUS } from "@/constants/general";
import { PATHS } from "@/constants/pathname";
import { useMutation } from "@/hooks/useMutation";
import { wishlistService } from "@/services/wishlistService";
import { addToCart } from "@/store/middleware/cartMiddleware";
import { convertPrice } from "@/utils/covertPrice";
import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMainContext } from "../Maincontext/MainContext";
import { profileUser } from "@/store/middleware/authMiddleware";
import { MESSAGE } from "@/constants/message";

const ProductCart = ({ item }) => {
  const { openModal, checkAuthen } = useMainContext();
  const { updateStatus } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { execute } = useMutation(wishlistService.addList, {
    onSuccess: (data) => {
      console.log(data);
      dispatch(profileUser());
      message.success(MESSAGE.WISHLIST);
    },
    onFail: (error) => {
      console.log(error);
      message.error("Failed");
    },
  });
  const onWishList = (idProduct) => {
    checkAuthen ? execute({ product: idProduct }) : openModal();
  };
  const onAddToCart = async () => {
    console.log(checkAuthen);
    if (!checkAuthen) {
      openModal();
    } else if (item?.id && updateStatus !== THUNK_STATUS.pending) {
      try {
        const res = await dispatch(addToCart(item?.id)).unwrap();
        if (res.id) {
          message.success(MESSAGE.ADDSUCCESS);
        }
      } catch (error) {
        console.log("error", error);
        message.error("Failed");
      }
    }
  };
  return (
    <div className="product product-2">
      <figure className="product-media">
        {item?.onSale && (
          <span className="product-label label-circle label-sale">Sale</span>
        )}
        <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={!item?.images?.length > 0 ? EMPTY : item?.images[0]}
            alt="Product image"
            className="product-image"
          />
        </Link>
        <div className="product-action-vertical">
          <a
            className="btn-product-icon btn-wishlist btn-expandable"
            onClick={() => onWishList(item?.id)}
          >
            <span>add to wishlist</span>
          </a>
        </div>
        <div className="product-action product-action-dark">
          <a
            onClick={onAddToCart}
            className="btn-product btn-cart"
            title="Add to cart"
          >
            <span>add to cart</span>
          </a>
        </div>
      </figure>
      <div className="product-body">
        <h3 className="product-title">
          <Link to={PATHS.PRODUCT + `/${item?.slug}`}>{item?.name}</Link>
        </h3>
        <div className="product-price"> {convertPrice(item?.price)} </div>
        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{ width: `${(item?.rating || 0) * 20}%` }}
            />
          </div>
          {/* <span className="ratings-text">( 4 Reviews )</span> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
