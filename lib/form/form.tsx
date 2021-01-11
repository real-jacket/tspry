import React from 'react'

interface FormProps {
  value: { [key: string]: any }
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: React.ReactFragment
  onSubmit: React.FormEventHandler
}

const Form: React.FunctionComponent<FormProps> = (props) => {
  return (
    <form>
      {props.fields.map((f) => (
        <div key={f.name}>
          {f.label}
          <input type={f.input.type}></input>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  )
}

export default Form
