import React, { Fragment, ReactElement } from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './dialog.scss'
import '../index.scss'

interface Props {
	visible: Boolean
	buttons?: Array<ReactElement>
	onClose: React.MouseEventHandler
}

const scopedClass = scopedClassMaker('tspry-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
	const close: React.MouseEventHandler = (e) => {
		props.onClose(e)
	}
	return props.visible ? (
		<Fragment>
			<div className={sc('mask')}></div>
			<div className={sc()}>
				<div className={sc('close')} onClick={close}>
					x
				</div>
				<header className={sc('header')}>提示</header>
				<main className={sc('main')}>{props.children}</main>
				{props.buttons && props.buttons.length > 0 && (
					<footer className={sc('footer')}>
						{props.buttons.map((button, index) => {
							return React.cloneElement(button, { key: index })
						})}
					</footer>
				)}
			</div>
		</Fragment>
	) : null
}

export default Dialog
