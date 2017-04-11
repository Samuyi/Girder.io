// @flow

import Immutable from 'immutable';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

import helloReducer from '../shared/reducer/hello';

const initStore = (plainPartialState: ?Object) => {
  const preLoadedState = plainPartialState ? {} : undefined;
  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preLoadedState.hello = helloReducer(undefined, {})
     .merge(Immutable.fromJS(plainPartialState.hello));
  }

  return createStore(combineReducers({ hello: helloReducer }),
    preLoadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
