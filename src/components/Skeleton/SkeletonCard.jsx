import React from "react";
import { Skeleton } from "antd";
import styled from "styled-components";
const ProductSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 5%;
`;
const SkeletonCard = () => {
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        {new Array(9).fill("").map((_, index) => {
          return (
            <ProductSkeletonStyle
              key={index}
              className="col-6 col-md-4 col-lg-4"
            >
              <Skeleton.Image active style={{ width: "100%", height: 275 }} />
              <Skeleton.Input />
              <Skeleton.Input block />
            </ProductSkeletonStyle>
          );
        })}
      </div>
    </div>
  );
};

export default SkeletonCard;
