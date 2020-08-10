import React, { useState } from 'react'
import Dialog from '../../lib/dialog/dialog'

export default function Dashboard() {
	const [show, setShow] = useState(false)
	return (
		<div>
			<button onClick={() => setShow(!show)}>click</button>
			<Dialog visible={show}>hi</Dialog>
		</div>
	)
}
