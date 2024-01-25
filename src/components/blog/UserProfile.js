import React from 'react';
import styled from 'styled-components';

const UserProfileContainer = styled.div`
  text-align: center; /* 부모 요소를 가운데 정렬합니다. */
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const NickName = styled.h3`
  margin-top : 10px;
  margin-bottom: 8px;
`;


function UserProfile({user}) {
  return (
    <UserProfileContainer>
        <ProfileImage src={user.profileimage} alt="Profile"/>
        <NickName>{user.nickname}</NickName>
    </UserProfileContainer>
  );
}

export default UserProfile;