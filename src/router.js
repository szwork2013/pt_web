import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/User'
import KnowTimeline from './routes/KnowTimeline'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <Route path="/users" component={Users} />
        <Route path="/timeline" component={KnowTimeline} />
      </Route>
    </Router>
  );
};