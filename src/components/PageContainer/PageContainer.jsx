import React from "react";

const PageContainer = ({ children, className = "", dashboard }) => {
  return (
    <div className={`page-content ${className}`}>
      {dashboard ? (
        <>
          <div className="dashboard">
            <div className="container">{children}</div>
          </div>
        </>
      ) : (
        <div className="container">{children}</div>
      )}
    </div>
  );
};

export default PageContainer;
