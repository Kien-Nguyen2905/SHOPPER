import Radio from "@/components/Radio/Radio";
import { SHIPPING_OPTIONS } from "@/constants/general";
import { PATHS } from "@/constants/pathname";
import { convertPrice } from "@/utils/covertPrice";
import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ subTotal, typeShip, total, onUpdateShip }) => {
  return (
    <aside className="col-lg-3">
      <div className="summary summary-cart">
        <h3 className="summary-title">Cart Total</h3>
        <table className="table table-summary">
          <tbody>
            <tr className="summary-subtotal">
              <td>Subtotal:</td>
              <td>{convertPrice(subTotal)}</td>
            </tr>
            <tr className="summary-shipping">
              <td>Shipping:</td>
              <td>&nbsp;</td>
            </tr>
            <Radio.Group defaultValue={typeShip} onChange={onUpdateShip}>
              {SHIPPING_OPTIONS.map((item, index) => {
                return (
                  <tr key={index} className="summary-shipping-row">
                    <td>
                      <Radio.Item value={item.value}>{item.label}</Radio.Item>
                    </td>
                    <td>{convertPrice(item.price)}</td>
                  </tr>
                );
              })}
            </Radio.Group>
            <tr className="summary-shipping-estimate">
              <td>
                Estimate for Your Country <br />
                <Link to={PATHS.DASHBOARD.INDEX}>Change address</Link>
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr className="summary-total">
              <td>Total:</td>
              <td>{convertPrice(total)}</td>
            </tr>
          </tbody>
        </table>
        <Link
          to={PATHS.CHECK_OUT}
          className="btn btn-outline-primary-2 btn-order btn-block"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
      <Link to={PATHS.HOME} className="btn btn-outline-dark-2 btn-block mb-3">
        <span>CONTINUE SHOPPING</span>
        <i className="icon-refresh" />
      </Link>
    </aside>
  );
};

export default CartTotal;
