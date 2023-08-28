import { PATHS } from "@/constants/pathname";
import { convertPrice } from "@/utils/covertPrice";
import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AccountOrder = () => {
  const { cartInfo } = useSelector((state) => state.cart);
  const products = cartInfo.product?.map((item, index) => ({
    ...item,
    quantity: cartInfo?.quantity[index],
  }));
  return (
    <div
      className="tab-pane fade show active"
      id="tab-orders"
      role="tabpanel"
      aria-labelledby="tab-orders-link"
    >
      {!products?.length > 0 && <p>No order has been made yet.</p>}
      <Link to={PATHS.PRODUCT} className="btn btn-outline-primary-2">
        <span>GO SHOP</span>
        <i className="icon-long-arrow-right" />
      </Link>
      <br />
      <br />
      {products?.length > 0 && (
        <table className="table table-cart table-mobile">
          <thead>
            <tr>
              <th>Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item, index) => (
              <tr key={index}>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
                        <img src={item?.images[0]} alt="Product image" />
                      </Link>
                    </figure>
                    <h3 className="product-title">
                      <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
                        {item?.name}
                      </Link>
                    </h3>
                  </div>
                </td>
                <td className="price-col text-center">
                  {convertPrice(item?.price)}
                </td>
                <td className="quantity-col text-center">{item?.quantity}</td>
                <td className="total-col text-center">
                  {convertPrice(Number(item?.price * item?.quantity || 0))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AccountOrder;
