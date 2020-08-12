import React, { ReactElement } from 'react'
import { scopedClassMaker } from '../helpers/classes'
import './dialog.scss'

interface Props {
	visible: Boolean
	buttons?: Array<ReactElement>
	onClose?: React.MouseEventHandler
	maskClosable?: Boolean
	closable?: Boolean
	onOk: React.MouseEventHandler
	onCancel: React.MouseEventHandler
}

const scopedClass = scopedClassMaker('tspry-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
	const close: React.MouseEventHandler = (e) => {
		props.onClose ? props.onClose(e) : props.onCancel(e)
	}
	const clickMask: React.MouseEventHandler = (e) => {
		props.maskClosable && close(e)
	}

	const ok: React.MouseEventHandler = (e) => {
		props.onOk(e)
	}

	const cancel: React.MouseEventHandler = (e) => {
		props.onCancel(e)
	}
	return props.visible ? (
		<>
			<div className={sc('mask')} onClick={clickMask}></div>
			<div className={sc()}>
				{props.closable && (
					<div className={sc('close')} onClick={close}>
						x
					</div>
				)}
				<header className={sc('header')}>提示</header>
				<main className={sc('main')}>{props.children}</main>
				<footer className={sc('footer')}>
					{props.buttons && props.buttons.length > 0 ? (
						props.buttons.map((button, index) => {
							return React.cloneElement(button, { key: index })
						})
					) : (
						<>
							<button onClick={ok}> 确定 </button>
							<button onClick={cancel}> 取消 </button>
						</>
					)}
				</footer>
			</div>
		</>
	) : null
}

export default Dialog
