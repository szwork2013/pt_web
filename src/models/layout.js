import {query,create,remove,query_one} from '../services/marks'
import {parse} from 'qs'
import {message} from 'antd'
import _ from 'lodash'

export default {
  namespace: 'layout',
  state: {
    menus: [
      {
        key: 1,
        name: '首页',
        icon: 'home',
        url: '/home',
      },
      {
        key: 2,
        name: '微信管理',
        icon: 'android',
        childs: [
          {
            key: 3,
            name: '微信订阅',
            url: '/subscribe'
          }
        ]
      },
      {
        key: 4,
        name: 'Demo',
        icon: 'android',
        childs: [
          {
            key: 5,
            name: 'CRUD',
            url: '/marks'
          }
        ]
      }
    ],
    navpath: [],
    activeKey: null,
    key: null,
    keyPath: null
  },
  reducers: {
    updateNavPath(state, action) {
      let navpath = []
      if(action.payload.keyPath){
        action.payload.keyPath.reverse().map((item)=>{
          let tmpOb = _.find(state.menus, function(o) {
            return o.key == item;
          })
          if(!tmpOb || tmpOb.name === '首页')return
          let childs = tmpOb.childs
          navpath.push({
            key: tmpOb.key,
            name: tmpOb.name
          })

          if(childs){
            tmpOb = _.find(childs, function(o) {
              return o.key == item;
            });
            if(!tmpOb)return
            navpath.push({
              key: tmpOb.key,
              name: tmpOb.name
            })
          }
        })
      }
      return {...state, navpath: navpath}
    },
  }
}
