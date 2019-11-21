import React, { useState, useEffect } from "react";
import UserBar from "./UserBar";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { getMessages, postMessage } from "../services/messages";
import socketIOClient from "socket.io-client";

export default function MessageBoard({ user }) {
  const [messages, setMessages] = useState({});
  const [inputValue, setInputValue] = useState("");
  const endpoint = "https://dans-chat-app.herokuapp.com/";
  const socket = socketIOClient(endpoint);
  const messageRef = React.useRef();
  const post = async e => {
    e.preventDefault();
    await postMessage({ userName: user, content: inputValue });
    socket.emit("new message", messages);
    setInputValue("");
  };

  useEffect(() => {
    socket.on("new message", async () => {
      const resp = await getMessages();
      setMessages(resp);
    });
  }, [socket]);

  useEffect(() => {
    async function getData() {
      const data = await getMessages();
      setMessages(data);
    }
    getData();
  }, []);

  return (
    <div>
      <MessageList
        messages={messages}
        setMessages={setMessages}
        user={user}
        myRef={messageRef}
      />
      {/* <UserBar userList={userList} /> */}
      <MessageBar
        post={post}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}
