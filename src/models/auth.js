import { hashHistory } from 'dva/router'

export default {
  namespace: 'auth',
  state: {
      isLogin: false
  },
  reducers: {
    login(state, action){
      localStorage.setItem('token', 'aaa')
      hashHistory.push({pathname: '/'})
      return {...state}
    },
    logout(state, action) {
      localStorage.clear()
      return {...state}
    },
  }
}
