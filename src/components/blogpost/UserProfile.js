import React from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right : 10px;
`;

const NickName = styled.h4`
  margin-top: 10px;
  margin-bottom: 8px;
`;

function UserProfile({ user }) {
  return (
    <UserProfileContainer>
      <ProfileImage src={user.profileimage} alt="Profile" />
      <NickName>{user.nickname}</NickName>
    </UserProfileContainer>
  );
}

export default UserProfile;
