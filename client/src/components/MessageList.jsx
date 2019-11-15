import React from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  width: 100vw;
  margin-top: 67px;
  height: 200px;
  height: 83vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  background: lightgrey;
  border-radius: 25px;
  display: inline;
  padding: 10px;
  margin-left: 10px;
  max-width: 50vw;
`;

const UserMessage = styled.div`
  background: #1b89f5;
  border-radius: 25px;
  display: inline;
  padding: 10px;
  align-self: flex-start;
  color: white;
  margin-right: 10px;
  max-width: 50vw;
`;
export default function MessageList({ messages, user, setMessages }) {
  return (
    <MessageDiv>
      {messages.message &&
        messages.message.map((m, i) => (
          <div
            key={i}
            style={m.userName === user ? { alignSelf: "flex-end" } : null}
          >
            <div style={{ height: "15px", width: "1px" }}></div>
            {m.userName === user ? (
              <UserMessage>{m.content}</UserMessage>
            ) : (
              <Message>
                {m.userName}: {m.content}
              </Message>
            )}
            <div style={{ height: "15px", width: "50px" }}></div>
          </div>
        ))}
    </MessageDiv>
  );
}
