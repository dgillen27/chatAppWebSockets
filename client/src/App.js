import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import MessageBoard from "./components/MessageBoard";
import socketIOClient from "socket.io-client";

function App(props) {
  const [user, setUser] = useState(
    // Check local storage to see if someone is logged in, if so, set user to local storage user
    localStorage.getItem("user") ? localStorage.getItem("user") : ""
  );

  const logOut = () => {
    localStorage.clear();
    setUser("");
    props.history.push("/");
  };
  const endpoint = "https://dans-chat-app.herokuapp.com/";
  // const endpoint = "http://localhost:8080";
  const socket = socketIOClient(endpoint);

  useEffect(() => {
    if (!!user) {
      props.history.push("/messages");
    } else if (!user) props.history.push("/");
  }, [props.history]);
  return (
    <div className="App">
      <NavBar user={user} logOut={logOut} />

      <Route
        exact
        path="/"
        render={props => <Login setUser={setUser} user={user} {...props} />}
      />
      <Route
        exact
        path="/messages"
        render={props => <MessageBoard user={user} socket={socket} />}
      />
    </div>
  );
}

export default withRouter(App);
