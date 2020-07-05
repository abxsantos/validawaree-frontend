import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './Linearity/reducers'
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const middlewares = [thunk];

ReactDOM.render(
  <React.StrictMode>
  <Provider store={createStore(reducers, {},  composeWithDevTools(applyMiddleware(...middlewares)))}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
