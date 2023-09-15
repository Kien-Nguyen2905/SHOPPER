import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { LOCAL } from "../../constants/localStorage";

const PrivateRoute = ({ redirectPath = "/" }) => {
  const { profile } = useSelector((store) => store.auth);
  console.log(!!!localStorage.getItem(LOCAL.token) && !!!profile);
  if (!!!localStorage.getItem(LOCAL.token) && !!!profile) {
    return <Navigate to={redirectPath} />;
  }
  return (
    profile && (
      <>
        <Outlet />
      </>
    )
  );
};

export default PrivateRoute;
