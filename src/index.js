import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './Linearity/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import './index.css';

import LinearityApp from './Linearity/LinearityApp';
import ResponsiveDrawer from './Sidebar/Sidebar';

const middlewares = [thunk];

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        reducers,
        {},
        composeWithDevTools(applyMiddleware(...middlewares))
      )}
    >
      <ResponsiveDrawer />
      <LinearityApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
