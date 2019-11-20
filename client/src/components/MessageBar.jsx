import React from "react";
import styled from "styled-components";

const InputDiv = styled.form`
  width: 100vw;
  height: 67px;
  // height: 100%;
  // border: 3px solid red;
  display: flex;
  align-items: center;
  background: #f0f0f0;
  position: fixed;
  bottom: 0;
`;

const Input = styled.input`
  height: 80%;
  outline: none;
  border: none;
  border-radius: 25px;
  margin-left: 3px;
  font-size: 100%;
  width: 90%;
  padding-left: 20px;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

const Button = styled.button`
  height: 80%;
  width: 9%;
  border-radius: 75px;
  border: none;
  background: white;
  :focus {
    outline: none;
  }
  @media (max-width: 800px) {
    width: 19%;
  }
`;

export default function MessageBar({ post, inputValue, setInputValue }) {
  return (
    <>
      <InputDiv>
        <Input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button onClick={post}>Send</Button>
      </InputDiv>
    </>
  );
}
