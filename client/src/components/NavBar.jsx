import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background: palevioletred;
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

export default function NavBar(props) {
  const { user, logOut } = props;
  return (
    <Nav>
      <UserName>{user ? `Welcome ${user}!` : "Please Sign In"}</UserName>
      {user && <Button onClick={logOut}>Log Out</Button>}
    </Nav>
  );
}
