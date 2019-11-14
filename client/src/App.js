import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import MessageBoard from "./components/MessageBoard";

function App(props) {
  const [user, setUser] = useState(
    // Check local storage to see if someone is logged in, if so, set user to local storage user
    localStorage.getItem("user") ? localStorage.getItem("user") : ""
  );

  // Check if a user is logged in, if not send them to login page
  useEffect(() => {
    !user && props.history.push("/");
  }, [user, props.history]);

  // log out user and send them to login page
  const logOut = () => {
    localStorage.clear();
    setUser("");
    props.history.push("/");
  };

  return (
    <div className="App">
      <NavBar user={user} logOut={logOut} />
      {!user && (
        <Route
          exact
          path="/"
          render={props => <Login setUser={setUser} {...props} />}
        />
      )}
      <Route
        exact
        path="/messages"
        render={props => <MessageBoard user={user} />}
      />
    </div>
  );
}

export default withRouter(App);
