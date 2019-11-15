import React, { useState } from "react";
import styled from "styled-components";

const LoginDiv = styled.form`
  margin-top: 100px;
  margin-left: 50px;
`;

export default function Login(props) {
  const { setUser } = props;

  const [userText, setUserText] = useState("");
  const login = e => {
    e.preventDefault();
    setUser(userText);
    localStorage.setItem("user", userText);
    setUserText("");
    props.history.push("/messages");
  };
  return (
    <LoginDiv>
      <input
        type="text"
        value={userText}
        onChange={e => setUserText(e.target.value)}
      />
      <button onClick={login}>Log In</button>
    </LoginDiv>
  );
}
