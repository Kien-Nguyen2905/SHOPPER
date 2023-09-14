import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link } from "react-router-dom";

const EmptyOrder = () => {
  return (
    <>
      <p>No order has been made yet.</p>
      <Link to={PATHS.PRODUCT} className="btn btn-outline-primary-2">
        <span>GO SHOP</span>
        <i className="icon-long-arrow-right" />
      </Link>
      <br />
      <br />
    </>
  );
};

export default EmptyOrder;
