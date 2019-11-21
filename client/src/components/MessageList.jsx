import React, { useEffect } from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";

const MessageDiv = styled.div`
  width: 100vw;
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
  padding: 12px;
  margin-left: 10px;
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 50vw;
`;

const UserMessage = styled.div`
  background: #1b89f5;
  border-radius: 25px;
  padding: 12px;
  align-self: flex-start;
  color: white;
  margin-right: 10px;
  width: auto;
  max-width: 50vw;
  display: inline-block;
  height: auto;
  // height: 500px;
`;

const Space = styled.div`
  height: 15px;
  width: 50px;
`;
export default function MessageList({ messages, user, setMessages, myRef }) {
  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: "messageList",
      duration: 100
    });
  }, [messages]);
  return (
    <MessageDiv id="messageList">
      {messages.message &&
        messages.message.map((m, i) => (
          <div
            ref={myRef}
            key={i}
            style={m.userName === user ? { alignSelf: "flex-end" } : null}
          >
            <Space></Space>
            {m.userName === user ? (
              <UserMessage>{m.content}</UserMessage>
            ) : (
              <Message>
                {m.userName}: {m.content}
              </Message>
            )}
            <Space></Space>
          </div>
        ))}
    </MessageDiv>
  );
}
