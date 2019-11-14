import React from "react";
import styled from "styled-components";

const InputDiv = styled.div`
  width: 80vw;
  margin-left: 15vw;
  height: 67px;
  border: 3px solid red;
`;

export default function MessageBar() {
  return (
    <>
      <InputDiv></InputDiv>
    </>
  );
}
