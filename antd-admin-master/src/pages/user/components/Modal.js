import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import { Trans } from "@lingui/macro"
import city from 'utils/city'
import { t } from "@lingui/macro"

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

class UserModal extends PureComponent {
  formRef = React.createRef()

  handleOk = () => {
    const { item = {}, onOk } = this.props

    this.formRef.current.validateFields()
      .then(values => {
        const data = {
          ...values,
          key: item.key,
        }
        data.address = data.address.join(' ')
        onOk(data)
      })
      .catch(errorInfo => {
        console.log(errorInfo)
      })
  }

  render() {
    const { item = {}, onOk, form, ...modalProps } = this.props

    return (
      <Modal {...modalProps} onOk={this.handleOk}>
        <Form ref={this.formRef} name="control-ref" initialValues={{ ...item, address: item.address && item.address.split(' ') }} layout="horizontal">

        
          <FormItem name='name' rules={[{ required: true }]}
            label={t`Printer`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>

          <FormItem name='work' label={t`Elevator`} hasFeedback {...formItemLayout}>
            <InputNumber min={1} max={18} />
          </FormItem>

          <FormItem name='name' rules={[{ required: true }]}
            label={t`Transport`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='phone' rules={[{ required: true, pattern: /^1[34578]\d{9}$/, message: t`The input is not valid phone!`, }]}
            label={t`Start Point`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
          <FormItem name='email' rules={[{ required: true, pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/, message: t`The input is not valid E-mail!`, }]}
            label={t`End Point`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>

          <FormItem name='alias' rules={[{ required: true }]}
            label={t`OffLine Meeting`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>

          <FormItem name='alias' rules={[{ required: true }]}
            label={t`Commute`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>

          <FormItem name='alias' rules={[{ required: true }]}
            label={t`Amounts`} hasFeedback {...formItemLayout}>
            <Input />
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
