import React, {PropTypes} from 'react'
import {Card, Form, Input, Icon, Button, Checkbox} from 'antd'
import { hashHistory } from 'dva/router'
import styles from './Login.less'

const FormItem = Form.Item

const Login = ({
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (errors) {
        return
      }
      const fieldsValue = getFieldsValue()
      // const data = {
      //   ...getFieldsValue(),
      //   mark_at: fieldsValue['mark_at'].format(),
      //   is_public: fieldsValue["is_public"] ? 'y':'n',
      //   status: fieldsValue["status"] ? 'aa':'nn',
      //   key: item.key
      // }
      // onOk(data)
      localStorage.setItem('token', 'aaa')
      hashHistory.push({pathname: '/'})
    })
  }

  return (
    <div className={styles.loginbg}>
      <Card title="测试平台" className={styles.logincls}>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                {
                  required: true,
                  message: '用户名不能为空'
                }
              ]
            })(
              <Input addonBefore={< Icon type = "user" />} placeholder="用户名"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '密码不能为空'
                }
              ]
            })(
              <Input addonBefore={< Icon type = "lock" />} type="password" placeholder="密码"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <Button type="primary" htmlType="submit" className={styles.loginBtn}>
              登录
            </Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  )
}

export default Form.create()(Login)
