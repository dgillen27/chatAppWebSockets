import React from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  width: 100vw;
  height: calc(100vh - 134px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 67px;
  bottom: 67px;
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
export default function MessageList({ messages, user, setMessages, myRef }) {
  return (
    <MessageDiv>
      {messages.message &&
        messages.message.map((m, i) => (
          <div
            ref={myRef}
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
