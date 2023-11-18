import Button from "@/components/Button/Button";
import { cn } from "@/constants/cn";
import { PAYMENT_METHOD } from "@/constants/general";
import { PATHS } from "@/constants/pathname";
import { convertPrice } from "@/utils/covertPrice";
import { Link } from "react-router-dom";

const SummaryCheckout = ({
  products,
  subTotal,
  total,
  shipping,
  paymentMethod,
  onUpdatePaymentMethod,
  onPlaceOrder,
}) => {
  const isCash = paymentMethod === PAYMENT_METHOD.cash;
  const isCard = paymentMethod === PAYMENT_METHOD.card;
  return (
    <aside className="col-lg-3">
      <div className="summary">
        <h3 className="summary-title">Your Order</h3>
        <table className="table table-summary">
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 &&
              products?.map((product, index) => {
                const { id, name, price, quantity } = product || {};
                return (
                  <tr key={id + index}>
                    <td>
                      <p>{`${name} x ${quantity}`}</p>
                    </td>
                    <td>{convertPrice(Number(price) * Number(quantity))}</td>
                  </tr>
                );
              })}
            <tr className="summary-subtotal">
              <td>Subtotal:</td>
              <td>{convertPrice(subTotal)}</td>
            </tr>
            <tr>
              <td>Shipping:</td>
              <td style={{ textTransform: "capitalize" }}>
                {shipping?.typeShip || (
                  <Link
                    style={{ textDecoration: "underline", color: "red" }}
                    to={PATHS.CART}
                  >
                    Please select
                  </Link>
                )}
              </td>
            </tr>
            <tr className="summary-total">
              <td>Total:</td>
              <td>{convertPrice(total)}</td>
            </tr>
          </tbody>
        </table>

        <div className="accordion-summary" id="accordion-payment">
          <div className="card">
            <div
              className="card-header"
              id="heading-1"
              onClick={() => onUpdatePaymentMethod(PAYMENT_METHOD.card)}
            >
              <h2 className="card-title">
                <a className={cn({ collapsed: !isCard })} role="button">
                  {" "}
                  Direct bank transfer{" "}
                </a>
              </h2>
            </div>
            <div id="collapse-1" className={cn("collapse", { show: isCard })}>
              <div className="card-body">
                {" "}
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.{" "}
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="card-header"
              id="heading-3"
              onClick={() => onUpdatePaymentMethod(PAYMENT_METHOD.cash)}
            >
              <h2 className="card-title">
                <a className={cn({ collapsed: !isCash })} role="button">
                  {" "}
                  Cash on delivery{" "}
                </a>
              </h2>
            </div>
            <div id="collapse-3" className={cn("collapse", { show: isCash })}>
              <div className="card-body">
                Quisque volutpat mattis eros. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Donec odio. Quisque volutpat
                mattis eros.{" "}
              </div>
            </div>
          </div>
        </div>

        <Button
          className="btn-outline-primary-2  btn-order b"
          onClick={onPlaceOrder}
        >
          <span className="btn-text">Place Order</span>
          <span className="btn-hover-text">Proceed to Checkout</span>
        </Button>
      </div>
    </aside>
  );
};

export default SummaryCheckout;
