import React, { Component, PropTypes } from 'react';
import {Affix} from 'antd'
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import HeaderBar from '../layouts/header_layout/HeaderLayout'

function IndexPage({ children }) {
  return (
    <div>
      <HeaderBar />

      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
