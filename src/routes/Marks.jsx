import React, {Component, PropTypes} from 'react';
import {connect} from 'dva'
import {routerRedux} from 'dva/router'

import MarkList from '../components/Mark/MarkList'

function Marks({location, dispatch, marks}) {
  const {
    loading,
    list,
    total,
  } = marks

  const markListProps = {
    dataSource: list,
    total,
    loading,
    onPageChange(page) {
      dispatch(routerRedux.push({pathname: 'marks', query: {
          page
        }}))
    }
  }

  return (
    <div>
      <MarkList {...markListProps}/>
    </div>
  );
}

Marks.propTypes = {
  marks: PropTypes.object
};

function mapStateToProps({marks}) {
  return {marks}
}

export default connect(mapStateToProps)(Marks);
