import React, { ChangeEvent, FormEvent, FormEventHandler } from 'react'

export interface Rule {
  key: string
  required?: boolean
  min?: number
  max?: number
}

export interface Field {
  name: string
  label: string
  input: { type: string }
}

export interface FormData {
  [key: string]: any
}

export interface FormProps {
  value: FormData
  fields: Array<Field>
  buttons: React.ReactFragment
  onChange: (key: string, val: string) => void
  onSubmit: React.FormEventHandler
  rules: Array<Rule>
  errors: Array<Error>
}

function isMin(val: number | string, min: number): boolean {
  if (typeof val === 'string') {
    return val.length < min
  } else {
    return val.toString().length < min
  }
}

function isMax(val: number | string, max: number): boolean {
  if (typeof val === 'string') {
    return val.length > max
  } else {
    return val.toString().length > max
  }
}

const isEmpty = (val: any): boolean =>
  val === '' || val === null || val === undefined

export interface Error {
  key: string
  message: string
}

export const Validator = (
  formData: FormData,
  rules: Array<Rule>
): Array<Error> => {
  const errors: Array<Error> = []
  rules.map((rule) => {
    const { key } = rule
    const val = formData[key]
    if (rule.required) {
      if (isEmpty(val)) {
        errors.push({
          key,
          message: '请输入内容',
        })
      } else {
        if (rule.min && isMin(formData[key], rule.min)) {
          errors.push({
            key,
            message: '长度不得小于最小值',
          })
        }
        if (rule.max && isMax(formData[key], rule.max)) {
          errors.push({
            key,
            message: '长度不得大于最大值',
          })
        }
      }
    }
  })
  return errors
}

const Form: React.FunctionComponent<FormProps> = (props) => {
  const { onSubmit, fields, errors, onChange } = props

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form onSubmit={submit}>
      {fields.map((f) => (
        <div key={f.name}>
          {f.label}
          <input
            type={f.input.type}
            onChange={(e) => onChange(f.name, e.target.value)}
          ></input>
          <span>{errors.find((item) => item.key === f.name)?.message}</span>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  )
}

export default Form
