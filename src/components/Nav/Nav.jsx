import React from "react";

const Nav = ({ className, children }) => {
  return (
    <nav aria-label="breadcrumb" className={`breadcrumb-nav ${className}`}>
      <div className="container">
        <ol className="breadcrumb">{children}</ol>
      </div>
    </nav>
  );
};

const NavItem = ({ children, isActive = false }) => {
  return (
    <li className={`breadcrumb-item ${isActive ? "active" : ""}`}>
      {children}
    </li>
  );
};

Nav.Item = NavItem;

export default Nav;
