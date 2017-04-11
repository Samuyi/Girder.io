// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Nav from './component/nav';
import HelloPage from './component/page/hello';
import HomePage from './component/page/home';
import HelloAsyncPage from './component/page/hello-async';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from '../shared/config';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../shared/routes';

const App = () =>
<div  style={{ padding: 54 }}>
  <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
<h1>{ APP_NAME }</h1>
<Nav />
<Switch>
  <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
  <Route  path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
  <Route  path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
  <Route  component={NotFoundPage} />
</Switch>
</div>


export default App
