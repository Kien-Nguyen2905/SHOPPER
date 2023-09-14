import React, { useState } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import OrderHeader from "./OrderHeader";
import OrderContent from "./OrderContent";
import Review from "./Review";
const OrderList = ({ list }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [productIdReview, setProductIdReview] = useState();
  const [orderIdReview, setOrderIdReview] = useState();

  const orderProps = {
    isModalOpen,
    setIsModalOpen,
    productIdReview,
    orderIdReview,
    setOrderIdReview,
    setProductIdReview,
  };
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  const getItems = (panelStyle) =>
    list?.map((item, index) => {
      return {
        key: index,
        label: <OrderHeader id={item?.id} updatedAt={item?.updatedAt} />,
        children: <OrderContent {...item} {...orderProps} />,
        style: panelStyle,
      };
    });
  console.log(list);
  return (
    <div className="order">
      <h2>My list ordered:</h2>
      <Collapse
        bordered={false}
        defaultActiveKey={["0"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItems(panelStyle)}
      />
      <Review {...orderProps} />
    </div>
  );
};

export default OrderList;
