import React from 'react'
// import '../icons/wechat.svg'
// import '../icons/alipay.svg'
// import '../icons/qq.svg'
import './importIcons'
import './icon.scss'

interface IconProps {
	name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
	return (
		<svg className='icon'>
			<use xlinkHref={`#${props.name}`} />
		</svg>
	)
}

export default Icon
