import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  width: 85vw;
  margin-top: 67px;
  height: 200px;
  border: 2px solid green;
  margin-left: 15vw;
  height: 80vh;
  overflow-y: scroll;
`;

export default function MessageList({ messages, setMessages }) {
  return (
    <MessageDiv>
      {messages.message &&
        messages.message.map((m, i) => (
          <div key={i} style={{ marginLeft: "5px" }}>
            {m.userName}: {m.content}
          </div>
        ))}
    </MessageDiv>
  );
}
