import { PATHS } from "@/constants/pathname";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ tab }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={PATHS.HOME}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {tab}
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Nav;
