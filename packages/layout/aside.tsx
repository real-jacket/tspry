import React, { HTMLAttributes } from 'react'
import { scopedClassMaker } from '../helpers/classes'

const sc = scopedClassMaker('tspry-layout')

interface Props extends HTMLAttributes<HTMLElement> {}

const Aside: React.FunctionComponent<Props> = (props) => {
  const { className, ...reset } = props
  return (
    <div className={sc('aside', className)} {...reset}>
      {props.children}
    </div>
  )
}

export default Aside
