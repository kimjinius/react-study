import * as usersAPI from '../api/users'; // api/users 안의 함수 모두 불러오기
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById
} from '../lib/asyncUtils';

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_USERS = 'GET_USERS'; // 요청 시작
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'; // 요청 성공
const GET_USERS_ERROR = 'GET_USERS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_USER = 'GET_USER';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const GET_USER_ERROR = 'GET_USER_ERROR';

// 아주 쉽게 thunk 함수를 만들 수 있게 되었습니다.
export const getUsers = createPromiseThunk(GET_USERS, usersAPI.getUsers);
export const getUser = createPromiseThunkById(GET_USER, usersAPI.getUserById);

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  users: reducerUtils.initial(),
  user: {}
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
    case GET_USERS_SUCCESS:
    case GET_USERS_ERROR:
        return handleAsyncActions(GET_USERS, 'users', true)(state, action);
    case GET_USER:
    case GET_USER_SUCCESS:
    case GET_USER_ERROR:
      return handleAsyncActionsById(GET_USER, 'user')(state, action);
    default:
      return state;
  }
}