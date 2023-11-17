import React from "react";
import { Skeleton } from "antd";
import styled from "styled-components";
const ProductSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 5%;
`;
const SkeletonBlog = () => {
  return (
    <>
      <div className="col-lg-9">
        <div className="entry-container max-col-2" data-layout="fitRows">
          {new Array(6).fill("").map((_, index) => {
            return (
              <ProductSkeletonStyle key={index} className="entry-item col-sm-6">
                <Skeleton.Image active style={{ width: "100%", height: 275 }} />
                <Skeleton.Input />
                <Skeleton.Input block />
              </ProductSkeletonStyle>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkeletonBlog;
