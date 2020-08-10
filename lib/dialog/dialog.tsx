import React from 'react'
import './dialog.scss'

interface Props {
	visible: Boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
	return props.visible ? <div>{props.children}</div> : null
}

export default Dialog
