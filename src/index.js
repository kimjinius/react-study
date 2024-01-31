import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({
});

const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  applyMiddleware(thunk, sagaMiddleware, logger)
); 

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();