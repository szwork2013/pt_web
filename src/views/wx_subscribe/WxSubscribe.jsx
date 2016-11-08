import React, {Component, PropTypes} from 'react';
import {connect} from 'dva'
import {routerRedux} from 'dva/router'

import SubscribeSearch from './SubscribeSearch'
import SubscribeList from './SubscribeList'

function WxSubscribe({location, dispatch, subscribe}) {
  const {
    loading,
    list,
    total,
    modalType,
    modalVisible,
    currentItem,
    queryParams,
    current,
    pageSize
  } = subscribe

  const subscribeSearchProps = {
    onSearch(fieldsValue) {
      dispatch({type: 'subscribe/updateQuery', payload: {
        queryParams: fieldsValue,
        current: 1
      }})
      dispatch({type: 'subscribe/query', payload:{
        query: fieldsValue,
        page: 1,
        current: 1,
        size: pageSize
      }})
    },
    onAdd() {
      dispatch({
        type: 'subscribe/showModal',
        payload: {
          modalType: 'create'
        }
      })
    }
  }

  const subscribeListProps = {
    dataSource: list,
    total,
    loading,
    onPageChange(page) {
      dispatch({type: 'subscribe/updateQuery', payload: {
        current: page
      }})
      dispatch({type: 'subscribe/query', payload:{
        query: queryParams,
        page: page,
        current: page,
        size: pageSize
      }})
      // dispatch(routerRedux.push({pathname: 'subscribe', query: {
      //     page
      //   }}))
    }
  }

  return (
    <div>
      <SubscribeSearch {...subscribeSearchProps}/>
      <br/>
      <SubscribeList {...subscribeListProps} />
    </div>
  );
}

WxSubscribe.propTypes = {
  subscribe: PropTypes.object
};

function mapStateToProps({subscribe}) {
  return {subscribe}
}

export default connect(mapStateToProps)(WxSubscribe);
