import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {store} from './store';
import {App} from './app';
import {LoginContainer} from './pages/login';
import {StudentListContainer} from './pages/student-list';
import {StudentDetailContainer} from './pages/student-detail';

const history = syncHistoryWithStore(hashHistory, store);

export const AppRouter = () => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginContainer}/>
        <Route path="login" component={LoginContainer}/>
        <Route path="student-list" component={StudentListContainer}/>
        <Route path="student-detail/:id" component={StudentDetailContainer}/>
      </Route>
    </Router>
  );
}