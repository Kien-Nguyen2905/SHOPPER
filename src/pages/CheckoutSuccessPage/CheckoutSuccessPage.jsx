import { LOCAL } from "@/constants/localStorage";
import { PATHS } from "@/constants/pathname";
import { orderService } from "@/services/orderService";
import { authActions } from "@/store/reducers/authReducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const distpatch = useDispatch();
  const { listOrder } = useSelector((state) => state.auth);
  const getMyOrder = async () => {
    try {
      const res = await orderService.getOrders();
      if (res) {
        distpatch(authActions.setOrder(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!!localStorage.getItem(LOCAL.token)) {
      getMyOrder();
    }
  }, []);
  if (!listOrder) return null;
  const order = listOrder?.orders?.[listOrder?.orders?.length - 1];
  return (
    <main className="main">
      <div className="content-success text-center">
        <div className="container">
          <h1 className="content-title">Your Order is Completed!</h1>
          <p>
            Your order <strong>{order?.id}</strong> has been completed. Your
            order details are shown for your personal accont.
          </p>
          <Link
            to={PATHS.DASHBOARD.ORDER}
            className="btn btn-outline-primary-2 btn-minwidth-lg"
          >
            <span>VIEW MY ORDERS</span>
            <i className="icon-long-arrow-right" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CheckoutSuccessPage;
