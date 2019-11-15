import React from "react";
import styled from "styled-components";

export default function NavBar(props) {
  const Nav = styled.div`
    background: #f0f0f0;
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
    border: 3px solid #1b89f5;
    color: #1b89f5;
    border-radius: 5px;
    position: absolute;
    right: 50px;
    font-weight: bold;
    font-size: 18px;
  `;

  const UserName = styled.div`
    color: black;
    font-size: 20px;
    position: absolute;
    left: 50px;
  `;

  const { user, logOut } = props;

  return (
    <Nav>
      <UserName>{user ? `Welcome ${user}!` : "Please Sign In"}</UserName>
      {user && <Button onClick={logOut}>Log Out</Button>}
    </Nav>
  );
}
