import React from 'react'
// import '../icons/wechat.svg'
// import '../icons/alipay.svg'
// import '../icons/qq.svg'
import './importIcons'
import './icon.scss'

interface IconProps {
	name: string
	onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	const { name, ...resetProps } = props
	return (
		<svg className='icon' {...resetProps}>
			<use xlinkHref={`#${props.name}`} />
		</svg>
	)
}

export default Icon
