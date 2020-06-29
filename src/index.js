import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from './reducers'

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={createStore(reducers, composeWithDevTools())}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
