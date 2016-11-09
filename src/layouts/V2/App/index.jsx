import React, { Component, PropTypes } from 'react';
import {Affix} from 'antd'
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.less';
import HeaderBar from '../Header'
import FreeScrollBar from 'react-free-scrollbar'
import NavPath from '../../NavPath'

function App({ children }) {
  return (
    <FreeScrollBar>
      <HeaderBar />
      <NavPath />
      <div className={styles.container}>
          {children}
      </div>
    </FreeScrollBar>
  );
}

App.propTypes = {
};

export default connect()(App);
