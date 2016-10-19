import {query,create,remove} from '../services/marks'
import {parse} from 'qs'
import {message} from 'antd'

export default {
  namespace: 'marks',
  state: {
    list: [],
    total: null,
    loading: false, //控制加载状态
    current: null, //当前分页信息
    currentItem: {}, //当前操作的用户对象
    modalVisible: false, //弹出框的显示状态
    modalType: 'create', //弹出框的类型（添加用户，编辑用户）
  },
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      history.listen(location => {
        if (location.pathname === '/marks') {
          dispatch({
            type: 'query',
            payload: location.query
          })
        }
      })
    }
  },
  effects: {
    *query({payload}, {call,put}) {
      yield put({type: 'showLoading'})
      const {data} = yield call(query, parse(payload))
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.Data,
            total: data.Total,
          }
        })
      }else{
        yield put({
          type: 'querySuccess',
          payload: {
            list: null,
            total: 0,
          }
        })
      }
    },
    *create({payload}, {call,put}) {
      yield put({type:'hideModal'})
      yield put({type:'showLoading'})
      const {data} = yield call(create, payload)
      if(data && data.issuccess){
        message.success('add success', 3);
        yield put({ type: 'query', payload: '' });
      }else{
        message.error('add fail', 5);
        yield put({ type: 'query', payload: '' });
      }
    },
    // delete是关键字
    *'delete' ({payload}, {call, put}) {
      yield put({type: 'hideModal'})
      yield put({type: 'showLoading'})
      const {data} = yield call(remove, {Id: payload})
      console.log(data)
      if(data && data.issuccess){
        message.success('delete success', 3);
        yield put({ type: 'query', payload: '' });
      }else{
        message.error('delete fail', 5);
        yield put({ type: 'query', payload: '' });
      }
    },
    * update() {}
  },
  reducers: {
    showLoading(state, action) {
      return {...state,loading:true}
    }, //控制加载状态的reducer
    hideLoading(state, action) {
      return {...state,loading:false}
    },
    showModal(state, action) {
      return {...state, ...action.payload, modalVisible: true}
    }, //控制Modal显示状态的reducer
    hideModal(state) {
      return { ...state, modalVisible: false };
    },
    querySuccess(state, action) {
      return {...state,...action.payload,loading: false}
    },
    createSuccess() {
    },
    deleteSuccess() {},
    updateSuccess() {}
  }
}
