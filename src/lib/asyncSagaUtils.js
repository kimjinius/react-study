import { call, put } from 'redux-saga/effects';


//createPromiseSaga 함수 호출 시, 반환되는 제너레이터 함수가 실행된다.
export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // action -> GET_VIETNAM takeEvery에서 갖고옴
  return function* saga(action) {
    try {
      // call은 함수를 호출하고, 해당 함수가 프로미스를 반환할 때까지 사가를 일시 중단한다.
      // promiseCreator 함
      console.log("action.payload   ", action);
      const payload = yield call(promiseCreator, action.payload);
      // SUCCESS 액션을 디스패치한다.
      yield put({ type: SUCCESS, payload});
    } catch (e) {
      // ERROR 액션을 디스패치한다.
      yield put({ type: ERROR, error: true, payload: e });
    }
  };
};


export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  // 성공 상태
  success: payload => ({
    loading: false,
    data: payload,
    error: null
  }),
  // 실패 상태
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
};

export const handleAsyncActions = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {

    console.log("handleAsyncActions     " + action.type);


    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null)
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        };
      default:
        return state;
    }
  };
};
