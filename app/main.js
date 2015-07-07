import React from 'react';
import Router from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';
import routes from './routes';
import { createRedux } from 'redux';
import * as stores from "stores"
import { Provider } from 'redux/react';
import Root from "root"

const history = new HashHistory();
const redux = createRedux(stores)
const element = (
  <Provider redux={redux}>
    {() => <Router history={history} routes={routes} /> }
  </Provider>
);
React.render(element, document.body);
