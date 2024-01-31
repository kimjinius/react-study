import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../modules/users';
import UserProfile from '../components/blogpost/UserProfile';


function UserProfileContainerland({ userid }) {
  const { data, loading, error } = useSelector(
    state => state.users.user[userid]
  ) || {
    loading: false,
    data: null,
    error: null
  }; 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(userid));
  }, [userid, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <UserProfile user={data} />;
}

export default UserProfileContainerland;