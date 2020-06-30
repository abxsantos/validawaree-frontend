import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'

import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const middlewares = [thunk];

ReactDOM.render(
  <React.StrictMode>
  <Provider store={createStore(reducers, {},  applyMiddleware(...middlewares))}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
