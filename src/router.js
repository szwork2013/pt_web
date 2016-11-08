import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import KnowTimeline from './routes/KnowTimeline'
import Marks from './routes/Marks'
import Subscribe from './views/wx_subscribe/WxSubscribe'

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
        <IndexRedirect to="/marks" />
        <Route path="/timeline" component={KnowTimeline} />
        <Route path="/marks" component={Marks} />
        <Route path="/subscribe" component={Subscribe} />
      </Route>
    </Router>
  );
};
