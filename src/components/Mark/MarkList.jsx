import React, {PropTypes} from 'react';
import {Table, message, Popconfirm} from 'antd'

const MarkList = ({total, current, loading, dataSource,onPageChange,onDeleteItem}) => {
  const columns = [
    {
      title: '编码',
      dataIndex: 'id',
      key: 'idId'
    },{
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    }, {
      title: '内容',
      dataIndex: 'content',
      key: 'content'
    },{
      title:'操作',
      key:'operation',
      render:(text, record)=>(
        <p>
          <a onClick={()=>{}}>编辑</a > &nbsp;
          <Popconfirm title = '确认要删除么?' onConfirm = {() => onDeleteItem(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </p>)
    }
  ]

  const pagination = {
    total,
    defaultCurrent: 1,
    pageSize: 10,
    onChange: onPageChange
  }

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} loading={loading} rowKey={record => record.id} pagination={pagination}/>
    </div>
  )
}

export default MarkList
