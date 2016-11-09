import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, IndexRedirect } from 'dva/router';
import IndexPage from './routes/IndexPage';
import KnowTimeline from './routes/KnowTimeline'
import Marks from './routes/Marks'
import Subscribe from './views/wx_subscribe/WxSubscribe'
import Home from './views/home/Home'
import Login from './common/login/Login'
import App from './layouts/V2/App'

export default function({ history }) {
  function requireAuth(nextState, replace) {
      if (!!!localStorage.token && nextState.location.pathname != '/login') {
        replace({
          pathname: '/login',
        })
      }
    }

  return (
    <Router history={history}>
      <Route path="/" onEnter={requireAuth}>
        <IndexRedirect to="/home" />
        <Route component={App}>
          <Route path='/home' component={Home}/>
          <Route path="/timeline" component={KnowTimeline} />
          <Route path="/marks" component={Marks} />
          <Route path="/subscribe" component={Subscribe} />
        </Route>
        <Route path='/login' component={Login}/>
      </Route>
    </Router>
  );
};
