import React from "react";
import styled from "styled-components";
import "./index.css";
import { useSpring, animated } from "@react-spring/web";
const LoadingStyled = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewLoading = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });
  return (
    <LoadingStyled style={animationProps}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingStyled>
  );
};

export default NewLoading;
