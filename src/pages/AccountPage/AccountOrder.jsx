import { orderService } from "@/services/orderService";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@/store/reducers/authReducer";
import { LOCAL } from "@/constants/localStorage";
import OrderList from "./Components/OrderList";
import EmptyOrder from "./Components/EmptyOrder";
const AccountOrder = () => {
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
  return (
    <div className="tab-pane fade active show">
      {listOrder?.orders?.length > 0 ? (
        <OrderList list={listOrder?.orders} />
      ) : (
        <EmptyOrder />
      )}
    </div>
  );
};

export default AccountOrder;
