import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LoginDiv = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Input = styled.input`
  height: 30px;
  font-size: 25px;
  width: 95%;
  max-width: 325px;
  text-align: center;
`;

const Button = styled.button`
  height: 30px;
  font-size: 25px;
  width: 95%;
  max-width: 325px;
  margin-top: 20px;
  border-radius: 25px;
`;

export default function Login(props) {
  const { setUser, user } = props;

  const [userText, setUserText] = useState("");
  const [rememberUser, setRememberUser] = useState(false);
  const login = e => {
    if (userText) {
      e.preventDefault();
      setUser(userText);
      rememberUser && localStorage.setItem("user", userText);
      setUserText("");
      props.history.push("/messages");
    } else {
      alert("Please enter your name!");
    }
  };

  useEffect(() => {
    if (!!user) {
      props.history.push("/messages");
    }
  }, [user, props.history]);

  const toggleRememberUser = () => {
    setRememberUser(!rememberUser);
  };
  return (
    <LoginDiv>
      <h1>Welcome to the Group Chat!</h1>
      <Input
        type="text"
        value={userText}
        onChange={e => setUserText(e.target.value)}
        placeholder="Enter your name"
      />
      <Button onClick={login}>Log In</Button>
      <div>
        <input type="checkbox" onChange={toggleRememberUser} />
        <label htmlFor="input">stay logged in</label>
      </div>
    </LoginDiv>
  );
}
