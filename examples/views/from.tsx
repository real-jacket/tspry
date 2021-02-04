import React, { useState } from 'react'
import Form, { Field, Rule, Error, Validator } from '../../lib/form/form'

const FormDemo: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const onChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  const [fields] = useState<Array<Field>>([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])

  const [rules] = useState<Array<Rule>>([
    { key: 'username', required: true },
    { key: 'password', min: 10, max: 16, required: true },
  ])

  const [errors, setErrors] = useState<Error[]>([])

  const submit = () => {
    setErrors(Validator(formData, rules))
    if (errors.length > 0) return
  }

  return (
    <>
      <h2>第一个例子</h2>
      <Form
        value={formData}
        fields={fields}
        buttons={<button>提交</button>}
        onSubmit={submit}
        onChange={onChange}
        rules={rules}
        errors={errors}
      ></Form>
    </>
  )
}

export default FormDemo
