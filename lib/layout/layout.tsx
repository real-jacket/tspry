import React, { HTMLAttributes, ReactElement } from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './layout.scss'
import Aside from './aside'

const sc = scopedClassMaker('tspry-layout')

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { className, children, ...rest } = props
  const childArray = children as Array<ReactElement>

  const hasAside =
    childArray.length && childArray.some((node) => node.type === Aside)

  return (
    <div
      className={sc({ '': true, hasAside: Boolean(hasAside) }, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Layout
