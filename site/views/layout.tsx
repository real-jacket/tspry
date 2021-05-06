import React from 'react'
import { Layout, Content, Footer, Header, Aside } from 'tspry'
import './layout.scss'

const LayoutDemo: React.FunctionComponent = () => {
  return (
    <>
      <h2>第一个例子</h2>
      <div className="box-demo">
        <Layout className="layout">
          <Header className="header">header</Header>
          <Content className="content">content</Content>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>
      <h2>第二个例子</h2>
      <div className="box-demo">
        <Layout className="layout">
          <Header className="header">header</Header>
          <Layout>
            <Aside className="aside">aside</Aside>
            <Content className="content">content</Content>
          </Layout>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>
      <h2>第三个例子</h2>
      <div className="box-demo">
        <Layout className="layout">
          <Header className="header">header</Header>
          <Layout className="layout">
            <Content className="content">content</Content>
            <Aside className="aside">aside</Aside>
          </Layout>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>
      <h2>第四个例子</h2>
      <div className="box-demo">
        <Layout className="layout">
          <Aside className="aside">aside</Aside>
          <Layout className="layout">
            <Header className="header">header</Header>
            <Content className="content">content</Content>
            <Footer className="footer">footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  )
}

export default LayoutDemo
