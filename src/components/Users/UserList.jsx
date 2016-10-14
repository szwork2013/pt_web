import React, {PropTypes} from 'react';
import {Table, message, Popconfirm} from 'antd'

const UserList = ({total, current, loading, dataSource}) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) =>< a href = '#' > {
        text
      } < /a>
    },{
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    },{
      title:'操作',
      key:'operation',
      render:(text, record)=>(
        <p>
          <a onClick={()=>{}}>编辑</a >
            &nbsp;
          <Popconfirm title = '确认要删除么?' onConfirm = {() => {}} >
            <a>删除</a>
          </Popconfirm>
        </p >)
    }
  ]

  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: () => {}
  }

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} loading={loading} rowKey={record => record.name} pagination={pagination}/>
    </div>
  )
}

export default UserList
