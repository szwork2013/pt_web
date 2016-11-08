import React, {PropTypes} from 'react';
import {Table, message, Popconfirm} from 'antd'
import moment from 'moment'

const SubscribeList = ({total, current, loading, dataSource,onPageChange}) => {
  const columns = [
    {
      title: '头像',
      dataIndex: 'wxHeadImgUrl',
      key: 'wxHeadImgUrl',
      fixed: 'left',
      width: 48,
      render: (text, record) => (
        <img src={text} style={{width: 48, height: 48}}/>
      )
    },
    {
      title: '微信OpenID',
      dataIndex: 'wxOpenId',
      key: 'wxOpenId'
    },
    {
      title: '用户昵称',
      dataIndex: 'wxNickName',
      key: 'wxNickName'
    },
    {
      title: '性别',
      dataIndex: 'wxSex',
      key: 'wxSex',
      render: (text, record) => {
        if(text === '1')
          return '男'
        else if(text === '2')
          return '女'
        else
          return '未知'
      }
    },
    {
      title: '是否关注',
      dataIndex: 'subscribed',
      key: 'subscribed',
      render: (text, record) => {
        return text === 'y' ? '是' : '否'
      }
    },
    {
      title: '关注时间',
      dataIndex: 'wxSubscribeTime',
      key: 'wxSubscribeTime',
      render: (text, record) => (
        moment(record.wxSubscribeTime).format('YYYY-MM-DD HH:mm:ss')
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        if(text === 'aa')
          return '已绑定'
        else if(text === 'na')
          return '未绑定'
        else
          return '无效'
      }
    }
  ]

  const pagination = {
    total,
    pageSize: 5,
    defaultCurrent: 1,
    onChange: onPageChange,
  }

  return (
    <div>
      <Table columns={columns} current={current} dataSource={dataSource} loading={loading} rowKey={record => record.uid} pagination={pagination} scroll={{ x: 1000 }} bordered={true}/>
    </div>
  )
}

export default SubscribeList
