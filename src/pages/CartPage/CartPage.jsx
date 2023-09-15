import Nav from "@/components/Nav/Nav";
import QuantityInput from "@/components/QuantityInput/QuantityInput";
import { convertPrice } from "@/utils/covertPrice";
import { Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/pathname";
import CartTotal from "./Components/CartTotal";
import useCartPage from "./useCartPage";

const CartPage = () => {
  const { products, onUpdateQuantity, totalProps, onRemoveProduct } =
    useCartPage();
  const { confirm } = Modal;
  const removeItem = (item) => {
    confirm({
      title: "Do you want remove this item from cart?",
      content: (
        <>
          <p>{`${item?.name || ""}`}</p>
          <p>{`${item?.quantity} x $${item?.price}`}</p>
        </>
      ),
      onOk() {
        onRemoveProduct?.(item?.id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
        </div>
      </div>
      <Nav>
        <Nav.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={PATHS.PRODUCT}>Product</Link>
        </Nav.Item>
        <Nav.Item isActive> Shopping Cart</Nav.Item>
      </Nav>
      <div className="page-content">
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {products?.length > 0 &&
                      products?.map((item, index) => (
                        <tr key={index}>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a>
                                  <img
                                    src={item?.images?.[0]}
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a>{item?.name}</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col">
                            {convertPrice(item?.price)}
                          </td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <QuantityInput
                                value={Number(item?.quantity)}
                                onChange={(value) =>
                                  onUpdateQuantity?.(value, index)
                                }
                              ></QuantityInput>
                            </div>
                          </td>
                          <td className="total-col">
                            {convertPrice(
                              Number(item?.price * item?.quantity || 0)
                            )}
                          </td>
                          <td className="remove-col">
                            <button
                              className="btn-remove"
                              onClick={() => removeItem(item)}
                            >
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <CartTotal {...totalProps} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
