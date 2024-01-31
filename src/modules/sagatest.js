import * as vietnamsAPI from '../api/sagatest';
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from '../lib/asyncSagaUtils';
import { takeEvery } from 'redux-saga/effects';

const GET_VIETNAM = 'GET_VIETNAM';
const GET_VIETNAM_SUCCESS = 'GET_VIETNAM_SUCCESS';
const GET_VIETNAM_ERROR = 'GET_VIETNAM_ERROR';

// 얘는 그냥 액션 생성함수.. GET_VIETNAM 액션을 리턴한다
export const getVietnam = text => ({ type: GET_VIETNAM, payload: text});

//createPromiseSaga함수는 제너레이터 함수를 리턴한다.
const getVietnamSaga = createPromiseSaga(GET_VIETNAM, vietnamsAPI.postTest);


// 루트사가에 vietnamSaga를 써놓음 -> GET_VIETNAM 이 액션이 발생할 때 까지 대기
export function* vietnamSaga() {
  // GET_VIETNAM 액션 발생 시 createPromiseSaga에서 반환되는 제너레이터 함수가 실행된다.
  yield takeEvery(GET_VIETNAM, getVietnamSaga);
}

const initialState = {
  vietnam: reducerUtils.initial(),
};

export default function vietnam(state = initialState, action) {
  switch (action.type) {
    case GET_VIETNAM:
    case GET_VIETNAM_SUCCESS:
    case GET_VIETNAM_ERROR:
      return handleAsyncActions(GET_VIETNAM, 'vietnam', true)(state, action);
    default:
      return state;
  }
}
