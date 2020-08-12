import React, { useState } from 'react'
import Dialog from '../../lib/dialog/dialog'

export default function Dashboard() {
	const [show, setShow] = useState(false)
	const ok: React.MouseEventHandler = (e) => {
		setShow(false)
		console.log(e)
	}
	const cancel = () => {
		setShow(false)
	}
	return (
		<div>
			<button onClick={() => setShow(!show)}>click</button>
			<Dialog visible={show} maskClosable={true} onOk={ok} onCancel={cancel}>
				hi
			</Dialog>
		</div>
	)
}
