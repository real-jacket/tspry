import React from 'react'
import './style.scss'

export default function Header() {
	return (
		<div className='header-wrapper'>
			<span>Logo</span>
			<span>使用文档</span>
			<span>组件</span>
			<span>版本记录</span>
			<a>github</a>
		</div>
	)
}
