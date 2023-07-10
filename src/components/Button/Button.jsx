import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className = "", to, children, type = "submit" }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${className}`}>
          {children}
        </Link>
      ) : (
        <button type={type} className={`btn ${className}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
