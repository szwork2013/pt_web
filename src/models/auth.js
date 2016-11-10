import { hashHistory } from 'dva/router'

export default {
  namespace: 'auth',
  state: {
      isLogin: false
  },
  effects: {
    login(){
      localStorage.setItem('token', 'aaa')
      hashHistory.push({pathname: '/'})
    },
    logout(state, action) {
      localStorage.clear()
      hashHistory.push({pathname: '/login'})
    }
  },
  reducers: {

  }
}
