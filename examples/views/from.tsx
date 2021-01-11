import React, { useState } from 'react'
import Form from '../../lib/form/form'

const FormDemo: React.FunctionComponent = () => {
  const [formData] = useState({
    username: '',
    password: '',
  })

  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])

  const submit = () => {}

  return (
    <>
      <h2>第一个例子</h2>
      <Form
        value={formData}
        fields={fields}
        buttons={<button>提交</button>}
        onSubmit={submit}
      ></Form>
    </>
  )
}

export default FormDemo
