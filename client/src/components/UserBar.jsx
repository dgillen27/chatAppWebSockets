import React from "react";
import styled from "styled-components";

const UserDiv = styled.div`
  background: white;
  border: 3px solid blue;
  width: 15vw;
  height: calc(100vh - 73px);
  position: fixed;
  top: 67px;
  left: 0;
`;

export default function UserBar({ userList }) {
  return (
    <UserDiv>
      {userList[0] && userList.map((user, id) => <p key={id}>{user}</p>)}
    </UserDiv>
  );
}
