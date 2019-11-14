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

export default function MessageList() {
  const [messages, setMessages] = useState(null);
  console.log(messages);

  useEffect(() => {
    async function getData() {
      return await getMessages();
    }
    setMessages(getData);
  }, []);

  return (
    <MessageDiv>
      {/* {!!messages.message &&
        messages.message.map(message => (
          <div
            style={{ backgroundColor: "red", height: "60px", width: "60px" }}
          >
            {message.userName}: {message.content}
          </div>
        ))} */}
    </MessageDiv>
  );
}
