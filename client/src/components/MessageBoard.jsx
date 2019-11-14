import React from "react";
import UserBar from "./UserBar";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

export default function MessageBoard() {
  return (
    <div>
      <MessageList />
      <UserBar />
      <MessageBar />
    </div>
  );
}
