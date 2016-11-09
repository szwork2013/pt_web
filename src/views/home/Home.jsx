import React, {PropTypes} from 'react'
import {Card, Row, Col} from 'antd'

const Home = ()=>{
  return (
    <div>
      <Row align={'middle'}>
        <Col span={3}></Col>
        <Col span={4}>
          <Card title='总关注人数'>
            <h1>100</h1>
          </Card>
        </Col>
        <Col span={3}></Col>
        <Col span={4}>
          <Card title='今日新增人数'>
            <h1>100</h1>
          </Card>
        </Col>
        <Col span={3}></Col>
        <Col span={4}>
          <Card title='已绑定会员'>
            <h1>100</h1>
          </Card>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  )
}

export default Home
