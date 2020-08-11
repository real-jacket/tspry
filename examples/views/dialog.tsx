import React, { useState } from 'react'
import Dialog from '../../lib/dialog/dialog'

export default function Dashboard() {
	const [show, setShow] = useState(false)
	return (
		<div>
			<button onClick={() => setShow(!show)}>click</button>
			<Dialog
				visible={show}
				onClose={() => {
					setShow(false)
				}}
				buttons={[
					<button
						onClick={() => {
							setShow(false)
						}}
					>
						确定
					</button>,
					<button
						onClick={() => {
							setShow(false)
						}}
					>
						取消
					</button>,
				]}
			>
				hi
			</Dialog>
		</div>
	)
}
