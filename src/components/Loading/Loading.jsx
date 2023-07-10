import React from "react";
import styled from "styled-components";
import "./index.css";
const LoadingStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <LoadingStyled>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
