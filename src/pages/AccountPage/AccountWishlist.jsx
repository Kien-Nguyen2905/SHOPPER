import Button from "@/components/Button/Button";
import { THUNK_STATUS } from "@/constants/general";
import { addToCart } from "@/store/middleware/cartMiddleware";
import { convertPrice } from "@/utils/covertPrice";
import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AccountWishlist = () => {
  const { profile } = useSelector((state) => state.auth);
  const { updateStatus } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const list = profile?.whiteList || [];
  const onAddToCart = async (product) => {
    if (product && updateStatus !== THUNK_STATUS.pending) {
      try {
        const res = await dispatch(addToCart(product)).unwrap();
        if (res.id) {
          message.success("Successfully");
        }
      } catch (error) {
        console.log("error", error);
        message.error("Failed");
      }
    }
  };
  return (
    <div
      className="tab-pane fade show active"
      id="tab-wishlist"
      role="tabpanel"
      aria-labelledby="tab-wishlist-link"
    >
      <table className="table table-wishlist table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th className="text-center">Price</th>
            <th className="text-center">Stock Status</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {list?.length > 0 &&
            list?.map((item, index) => (
              <tr key={index}>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <a href="#">
                        <img src={item?.images?.[0]} alt="Product image" />
                      </a>
                    </figure>
                    <h3 className="product-title">
                      <a href="#">{item?.name}</a>
                    </h3>
                  </div>
                </td>
                <td className="price-col text-center">
                  {convertPrice(item?.price)}
                </td>

                <td className="stock-col text-center">
                  {item?.stock > 0 ? (
                    <span className="in-stock">In stock</span>
                  ) : (
                    <span className="out-of-stock">Out of stock</span>
                  )}
                </td>
                <td className="action-col">
                  <Button
                    className="btn-block btn-outline-primary-2"
                    onClick={() => onAddToCart(item?.id)}
                  >
                    <i className="icon-cart-plus" />
                    Add to Cart
                  </Button>
                </td>
                <td className="remove-col">
                  <button className="btn-remove">
                    <i className="icon-close" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountWishlist;
