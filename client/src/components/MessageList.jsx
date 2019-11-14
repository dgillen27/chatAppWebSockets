import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMessages } from "../services/messages";

const MessageDiv = styled.div`
  width: 85vw;
  margin-top: 67px;
  height: 200px;
  border: 2px solid green;
  margin-left: 15vw;
  height: 80vh;
`;

export default function MessageList({ messages, setMessages }) {
  useEffect(() => {
    async function getData() {
      const data = await getMessages();
      setMessages(data);
    }
    getData();
  }, []);

  console.log(messages);

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
