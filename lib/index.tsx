import React, { MouseEventHandler } from 'react'
import ReactDom from 'react-dom'
import Icon from './Icon'

function App() {
	const fn: MouseEventHandler<SVGElement> = (e) => {
		console.log(e)
		console.log(e.target)
	}
	return (
		<>
			<Icon
				name='wechat'
				onClick={fn}
				className='small'
				onMouseEnter={() => {
					console.log('enter')
				}}
				onMouseLeave={() => {
					console.log('leave')
				}}
			></Icon>
		</>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
