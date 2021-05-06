import React from 'react'
import './importIcons'
import './icon.scss'
import classes from '../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  className,
  ...resetProps
}) => {
  return (
    <svg className={classes('icon', className)} {...resetProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon
