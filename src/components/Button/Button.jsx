import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className = "", to, children, type = "submit", ...rest }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${className}`} {...rest}>
          {children}
        </Link>
      ) : (
        <button type={type} className={`btn ${className}`} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
