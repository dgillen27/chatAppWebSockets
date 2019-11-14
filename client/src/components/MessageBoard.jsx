import React, { useState } from "react";
import UserBar from "./UserBar";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { getMessages, postMessage } from "../services/messages";

export default function MessageBoard({ user }) {
  const [messages, setMessages] = useState({});
  const post = async content => {
    await postMessage({ userName: user, content: content });
    const data = await getMessages();
    setMessages(data);
  };
  return (
    <div>
      <MessageList messages={messages} setMessages={setMessages} />
      <UserBar />
      <MessageBar post={post} />
    </div>
  );
}
