// @flow

import 'babel-polyfill';

import App from '../shared/app';
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config';
import helloReducer from '../shared/reducer/hello';
import { isProd } from '../shared/utils';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import setUpSocket from './socket';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Immutable from 'immutable';
import $ from 'jquery';
import Tether from 'tether';

window.jQuery = $;
window.Tether = Tether;
require('bootstrap');

// eslint-disable-next-line no-underscore-dangle

const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__) || compose;
const preLoadedState = window.__PRELOADED_STATE__;
// eslint-enable no-underscore-dangle

const store = createStore(combineReducers({ hello: helloReducer }),
  { hello: Immutable.fromJS(preLoadedState.hello) },
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const rootEL = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) =>
<Provider  store = {reduxStore}>
 <BrowserRouter>
  <AppContainer >
   <AppComponent />
  </AppContainer>
</BrowserRouter>
</Provider>

ReactDOM.render(wrapApp(App, store), rootEL);


if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp), rootEL)
  })
};

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR);
// flow-disable-next-line

jssServerSide.parentNode.removeChild(jssServerSide);

setUpSocket(store);
