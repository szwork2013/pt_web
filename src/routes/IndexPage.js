import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1>宝宝快点睡觉啦</h1>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
