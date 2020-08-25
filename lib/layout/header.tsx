import React, { HTMLAttributes } from 'react'
import { scopedClassMaker } from '../helpers/classes'

const sc = scopedClassMaker('tspry-layout')
interface Props extends HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={sc('header', className)} {...rest}>
      header
    </div>
  )
}

export default Header
