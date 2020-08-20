import React, { ReactElement, ReactFragment, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { scopedClassMaker } from '../helpers/classes'
import './dialog.scss'

interface Props {
  visible: Boolean
  buttons?: Array<ReactElement>
  onClose?: React.MouseEventHandler
  maskClosable?: Boolean
  closable?: Boolean
  onOk?: React.MouseEventHandler
  onCancel?: React.MouseEventHandler
  actionable?: Boolean
}

const scopedClass = scopedClassMaker('tspry-dialog')
const sc = scopedClass

const Dialog: React.FunctionComponent<Props> = (props) => {
  const close: React.MouseEventHandler = (e) => {
    props.onClose ? props.onClose(e) : props.onCancel && props.onCancel(e)
  }
  const clickMask: React.MouseEventHandler = (e) => {
    props.maskClosable && close(e)
  }

  const ok: React.MouseEventHandler = (e) => {
    props.onOk && props.onOk(e)
  }

  const cancel: React.MouseEventHandler = (e) => {
    props.onCancel && props.onCancel(e)
  }
  const x = props.visible ? (
    <>
      <div className={sc('mask')} onClick={clickMask} />
      <div className={sc()}>
        {props.closable && (
          <div className={sc('close')} onClick={close}>
            x
          </div>
        )}
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.actionable && (
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.length > 0 ? (
              props.buttons.map((button, index) => {
                return React.cloneElement(button, { key: index })
              })
            ) : (
              <>
                <button onClick={ok}> 确定</button>
                <button onClick={cancel}> 取消</button>
              </>
            )}
          </footer>
        )}
      </div>
    </>
  ) : null

  return ReactDOM.createPortal(x, document.body)
}

Dialog.defaultProps = {
  maskClosable: false,
  actionable: true,
}

const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      closable={true}
      actionable={false}
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
      }}
    >
      {content}
    </Dialog>
  )

  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

const confirm = (content: string, onYes: () => void, onNo: () => void) => {
  const destroy = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const yes = () => {
    onYes()
    destroy()
  }

  const no = () => {
    onNo()
    destroy()
  }
  const component = (
    <Dialog
      visible={true}
      closable={true}
      onOk={yes}
      onCancel={no}
      onClose={destroy}
    >
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

const modal = (content: ReactNode | ReactFragment) => {
  const destroy = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = (
    <Dialog visible={true} onClose={destroy} closable={true} actionable={false}>
      {content}
    </Dialog>
  )

  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)

  return destroy
}

export { alert, confirm, modal }

export default Dialog
