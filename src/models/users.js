export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    loading: false,//控制加载状态
    current: null,//当前分页信息
    currentItem: {},//当前操作的用户对象
    modalVisible: false,//弹出框的显示状态
    modalType: 'create',//弹出框的类型（添加用户，编辑用户）
  },
  effects: {
    *query(){},
    *create(){},
    // delete是关键字
    *'delete'(){},
    *update(){}
  },
  reducers: {
    showLoading(){},//控制加载状态的reducer
    showModal(){},//控制Modal显示状态的reducer
    hideModal(){},
    querySuccess(){},
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){}
  }
}
