import React, { useState, useEffect } from "react";
import UserBar from "./UserBar";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { getMessages, postMessage } from "../services/messages";
import socketIOClient from "socket.io-client";
import { useInterval } from "./customHooks/useInterval";

export default function MessageBoard({ user }) {
  const [messages, setMessages] = useState({});
  const endpoint = "http://localhost:8080";
  const socket = socketIOClient(endpoint);
  const send = () => {
    socket.emit("new message", messages);
  };
  const post = async content => {
    await postMessage({ userName: user, content: content });
    const data = await getMessages();
    setMessages(data);
    send();
    socket.emit("new message", messages);
  };

  useEffect(() => {
    socket.on("new message", async () => {
      const resp = await getMessages();
      setMessages(resp);
    });
  }, []);

  useEffect(() => {
    async function getData() {
      const data = await getMessages();
      setMessages(data);
    }
    getData();
  }, []);

  return (
    <div>
      <MessageList messages={messages} setMessages={setMessages} />
      <UserBar />
      <MessageBar post={post} />
    </div>
  );
}
