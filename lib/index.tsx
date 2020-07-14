import React from 'react'
import ReactDom from 'react-dom'
import Icon from './Icon'

function App() {
	return (
		<>
			<Icon name='wechat'></Icon>
			<Icon name='qq'></Icon>
			<Icon name='alipay'></Icon>
		</>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
