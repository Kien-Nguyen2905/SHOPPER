import { PATHS } from "@/constants/pathname";
import { authActions } from "@/store/reducers/authReducer";
import { cartActions } from "@/store/reducers/cartReducer";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
  };
  return (
    <aside className="col-md-4 col-lg-3">
      <ul className="nav nav-dashboard flex-column mb-3 mb-md-0">
        <li className="nav-item">
          <NavLink end to={PATHS.DASHBOARD.INDEX} className="nav-link">
            Account Details
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={PATHS.DASHBOARD.ORDER} className="nav-link">
            Orders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={PATHS.DASHBOARD.ADDRESSES} className="nav-link">
            Adresses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={PATHS.DASHBOARD.WISHLIST} className="nav-link">
            Wishlist
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={PATHS.HOME}
            onClick={() => onLogout()}
            className="nav-link"
          >
            Sign Out
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
