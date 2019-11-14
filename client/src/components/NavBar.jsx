import React, { useState, useEffect } from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";
import { useInterval } from "./customHooks/useInterval";

export default function NavBar(props) {
  const [navColor, setNavColor] = useState("palevioletred");
  const Nav = styled.div`
    background: ${navColor};
    height: 67px;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
  `;

  const Button = styled.button`
    background: white;
    height: 45px;
    width: 100px;
    border: 3px solid #f5b83d;
    color: #f5b83d;
    border-radius: 5px;
    position: absolute;
    right: 50px;
    font-weight: bold;
    font-size: 18px;
  `;

  const UserName = styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    left: 50px;
  `;
  const endpoint = "http://localhost:8080";
  const socket = socketIOClient(endpoint);
  const changeColor = () => {
    navColor !== "red" ? setNavColor("red") : setNavColor("palevioletred");
    // send();
  };

  const send = () => {
    const socket = socketIOClient(endpoint);
    socket.emit("change color", navColor);
  };
  const { user, logOut } = props;

  // const socket = socketIOClient(endpoint);

  useEffect(() => {
    // setInterval(send(), 1000);
    socket.on("change color", col => {
      setNavColor(col);
    });
  });

  // useInterval(() => {
  //   send();
  // }, 1000);

  return (
    <Nav>
      <UserName>{user ? `Welcome ${user}!` : "Please Sign In"}</UserName>
      <button style={{ marginLeft: "200px" }} onClick={changeColor}>
        Change Color
      </button>
      {user && <Button onClick={logOut}>Log Out</Button>}
    </Nav>
  );
}
