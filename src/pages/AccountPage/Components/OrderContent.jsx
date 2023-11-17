import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link } from "react-router-dom";

const OrderContent = ({
  id,
  address,
  isReview,
  note,
  product,
  quantity,
  totalProduct,
  shipping,
  total,
  subTotal,
  discount,
  setIsModalOpen,
  setProductIdReview,
  setOrderIdReview,
}) => {
  const { fullName, phone, street, email } = address;
  const handleReview = (idProduct) => {
    setProductIdReview(idProduct);
    setOrderIdReview(id);
    setIsModalOpen(true);
  };
  return (
    <div className="orderItem">
      <div className="info">
        <div className="wrapInfo">
          <label>
            Name: <strong>{fullName}</strong>{" "}
          </label>
          <label>
            Phone: <strong>{phone}</strong>{" "}
          </label>
          <label>
            Email: <strong>{email}</strong>{" "}
          </label>
          <label>
            Address: <strong>{street}</strong>{" "}
          </label>
          <label>
            Note: <strong>{note}</strong>{" "}
          </label>
          <label>
            Type Shipping: <strong>{shipping?.typeShip}</strong>{" "}
          </label>
        </div>
      </div>
      <div className="table-container">
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
            {product?.length
              ? product?.map((item, index) => (
                  <tr key={item?.id}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
                            <img src={item?.images[0]} alt="Product image" />
                          </Link>
                        </figure>
                        <h3 className="product-title">
                          <Link to={PATHS.PRODUCT + `/${item?.slug}`}>
                            {item.name}
                          </Link>
                          {!isReview[index] ? (
                            <div
                              className="nav-dashboard reviewOrder"
                              onClick={() => handleReview(item.id)}
                            >
                              <p className="nav-link active">Review</p>
                            </div>
                          ) : (
                            <div className="nav-dashboard reviewOrder">
                              <Link
                                to={PATHS.PRODUCT + `/${item?.slug}`}
                                className="nav-link active"
                              >
                                Already Reviewed
                              </Link>
                            </div>
                          )}
                        </h3>
                      </div>
                    </td>
                    <td className="price-col text-center">${item?.price}</td>
                    <td className="quantity-col text-center">
                      {quantity.length === product?.length
                        ? quantity[index]
                        : "0"}{" "}
                    </td>
                    <td className="total-col text-center">
                      {totalProduct.length === product.length
                        ? totalProduct[index]
                        : "0"}
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        <div className="orderPrice">
          <div className="wrapInfo price">
            <label>
              SubTotal: <strong>{subTotal}$</strong>{" "}
            </label>
            <label>
              Discount: <strong>{discount}$</strong>{" "}
            </label>
            <label>
              Total: <strong>{total}$</strong>{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderContent;
