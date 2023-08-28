import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOCAL } from "../../constants/localStorage";

const PrivateRoute = ({ redirectPath = "/" }) => {
  if (!!!localStorage.getItem(LOCAL.token)) {
    return <Navigate to={redirectPath} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
