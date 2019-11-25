import React from "react";
import styled, { keyframes } from "styled-components";
// import keyframes from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CircleContainer = styled.div`
  animation: ${rotate} 5s linear infinite;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 200px;
  width: 200px;
  margin: 5% auto;
  justify-items: center;
  align-items: center;
`;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 49%;
  animation: ${rotate} 3s linear infinite;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
`;

export default function Loading() {
  return (
    <CircleContainer>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </CircleContainer>
  );
}
