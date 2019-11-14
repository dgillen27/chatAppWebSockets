import React, { useState } from "react";
import styled from "styled-components";
import { getMessages, postMessage } from "../services/messages";

const InputDiv = styled.div`
  width: 85vw;
  margin-left: 15vw;
  height: 67px;
  border: 3px solid red;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: calc(100% - 6px);
  outline: none;
  margin-left: 3px;
  font-size: 100%;
  width: 89%;
`;

const Button = styled.button`
  height: 100%;
  width: 9%;
`;

export default function MessageBar({ post }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputDiv>
        <Input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button onClick={async () => await post(inputValue)}>Send</Button>
      </InputDiv>
    </>
  );
}
