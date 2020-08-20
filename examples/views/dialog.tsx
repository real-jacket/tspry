import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from '../../lib/dialog/dialog'

export default function Dashboard() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const ok: React.MouseEventHandler = (e) => {
    setShow1(false)
    console.log(e)
  }
  const cancel = () => {
    setShow1(false)
  }

  const openModal = () => {
    const close = modal(
      <h1>
        你好
        <button onClick={() => close()}>close</button>
      </h1>
    )
  }
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => setShow1(!show1)}>click</button>
        <Dialog visible={show1} maskClosable={true} onOk={ok} onCancel={cancel}>
          hi
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => setShow2(!show2)}>click</button>
        <Dialog
          buttons={[
            <button
              onClick={() => {
                setShow2(false)
              }}
            >
              ok
            </button>,
            <button
              onClick={() => {
                setShow2(false)
              }}
            >
              cancel
            </button>,
          ]}
          visible={show2}
          maskClosable={true}
        >
          hi
        </Dialog>
      </div>
      <div>
        <h1>example3</h1>
        <button
          onClick={() => {
            alert('alert')
          }}
        >
          alert
        </button>
        <button
          onClick={() => {
            confirm(
              'confirm',
              () => {
                console.log('你点击了确定')
              },
              () => {
                console.log('你点击了取消')
              }
            )
          }}
        >
          confirm
        </button>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  )
}
