import React, {PropTypes} from 'react';
import {Form, Input, Modal, DatePicker, Checkbox} from 'antd'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

const MarkModal = ({
  visible,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleOk() {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  function onCheckChange(e) {
    console.log(`checked = ${e.target.checked}`)
    item.Status = e.target.checked === true
      ? 'aa'
      : 'nn'
  }

  const modalOpts = {
    title: '新增',
    visible,
    onOk: handleOk,
    onCancel
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='标题：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('Title', {
            initialValue: item.Title,
            rules: [
              {
                required: true,
                message: '标题不能为空'
              }
            ]
          })(<Input type='text'/>)}
        </FormItem>
        <FormItem label="内容：" hasFeedback {...formItemLayout}>
          {getFieldDecorator('Content', {
            initialValue: item.Content,
            rules: [
              {
                required: true,
                message: '内容不能为空'
              }
            ]
          })(<Input type="text"/>)}
        </FormItem>
        
      </Form>
    </Modal>
  )
}

MarkModal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func
}

export default Form.create()(MarkModal)
