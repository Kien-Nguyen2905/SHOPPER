import React from "react";

const SkeletonCard = () => {
  return (
    <div style={{ paddingBottom: "22px" }}>
      <div
        className="item"
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <div
          className="skeleton"
          style={{ height: "280px", width: "280px", borderRadius: "3px" }}
        />
        <div
          className="skeleton"
          style={{ height: "30px", width: "240px", borderRadius: "3px" }}
        />
        <div
          className="skeleton"
          style={{ height: "20px", width: "100px", borderRadius: "3px" }}
        />
        <div
          className="skeleton"
          style={{ height: "20px", width: "170px", borderRadius: "3px" }}
        />
      </div>
    </div>
  );
};

export default SkeletonCard;
