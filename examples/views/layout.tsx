import React from 'react'
import Layout from '../../lib/layout/layout'
import Content from '../../lib/layout/content'
import Footer from '../../lib/layout/footer'
import Header from '../../lib/layout/header'
import Aside from '../../lib/layout/aside'

const LayoutDemo: React.FunctionComponent = () => {
  return (
    <>
      <h1>第一个例子</h1>
      <Layout style={{ height: '600px', width: '800px' }}>
        <Header />
        <Content />
        <Footer />
      </Layout>
      <h1>第二个例子</h1>
      <Layout style={{ height: '600px', width: '800px' }}>
        <Header />
        <Layout>
          <Aside />
          <Content />
        </Layout>
        <Footer />
      </Layout>
      <h1>第三个例子</h1>
      <Layout style={{ height: '600px', width: '800px' }}>
        <Header />
        <Layout>
          <Content />
          <Aside />
        </Layout>
        <Footer />
      </Layout>
      <h1>第四个例子</h1>
      <Layout style={{ height: '600px', width: '800px' }}>
        <Aside />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </>
  )
}

export default LayoutDemo
