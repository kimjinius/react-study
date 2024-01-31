import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import vietnam, {vietnamSaga} from './sagatest';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({ posts, users, vietnam });

export function* rootSaga() {
    yield all([vietnamSaga()]);
}

export default rootReducer;