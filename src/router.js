import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import KnowTimeline from './routes/KnowTimeline'
import Marks from './routes/Marks'

export default function({ history }) {
  function requireAuth(nextState, replace) {
      // if (!!!localStorage.token) {
      //   replace({
      //     pathname: '/login',
      //   })
      // }
    }

  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} onEnter={requireAuth}>
        <Route path="/" component={Marks} />
        <Route path="/timeline" component={KnowTimeline} />
        <Route path="/marks" component={Marks} />
      </Route>
    </Router>
  );
};
