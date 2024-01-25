import React from 'react';
import styled from 'styled-components';

function UserHomeDiv({ user }) {
  const TitleImage = styled.img`
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 50%;
    margin-top : 140px;
  `;

  const UserHomeDivWrap = styled.div`
    width: 250px;
    height: 500px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
    margin-right: 20px;
  `;

  const UserName = styled.h2`
    margin: 0; /* Remove default margin for h2 */
  `;

  return (
    <UserHomeDivWrap>
      <TitleImage src={user.profileimage} alt="Title" />
      <UserName>{user.nickname}</UserName>
    </UserHomeDivWrap>
  );
}

export default UserHomeDiv;
