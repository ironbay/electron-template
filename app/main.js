import React from 'react';
import Router from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';
import routes from './routes';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from "reducers"
import { Provider } from 'react-redux';
import Root from "root"

const history = new HashHistory();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const element = (
  <Provider store={store}>
    {() => <Router history={history} routes={routes} /> }
  </Provider>
);
React.render(element, document.body);
