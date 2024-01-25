import { React } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import styled from 'styled-components';
import UserContainer from '../containers/UserContainer';
import UserPostListContainer from '../containers/UserPostListContainer';

const UserHome = () => {
  const params = useParams();

  const UserHomeWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://i.pinimg.com/originals/00/71/e1/0071e1e2ccbd1374a21398e6280d470a.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  `;

  const HomeLink = styled(Link)`
    position: absolute;
    top: 100px;
    left: 200px;
    text-decoration: none;

    display: flex;
    align-items: center;

    span{
      margin-left : 10px;
      font-size : 18px;
      color : #59634f;
    }
  `;

  return (
    <UserHomeWrap>
      <HomeLink to="/" style={{ textDecoration: "none", color: "black" }}>
        <MdHome size="30" />
        <span>블로그홈</span>
      </HomeLink>
      <UserContainer userid={params.userid}/>
      <UserPostListContainer userid={params.userid}/>
    </UserHomeWrap>
  );
};

export default UserHome;
