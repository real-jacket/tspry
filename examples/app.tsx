import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink,
} from 'react-router-dom'
import routes from './routes'
import './style.scss'
import Layout, { Aside, Content, Header } from '../lib/layout/layout'

export default function BasicExample() {
  return (
    <div className="body">
      <Router>
        <Layout className="wrapper">
          <Header className="header-wrapper">
            <div className="header-log">
              <span>Logo</span>
            </div>
            <div className="header-title">
              <span>使用文档</span>
              <span>组件</span>
              <span>版本记录</span>
              <span>
                <a>github</a>
              </span>
            </div>
          </Header>
          <Layout className="content-wrapper">
            <Aside className="content-aside">
              <h2>组件</h2>
              <NavLink to="/icon" activeClassName="active">
                Icon
              </NavLink>
              <NavLink to="/button" activeClassName="active">
                Button
              </NavLink>
              <NavLink to="/dialog" activeClassName="active">
                Dialog
              </NavLink>
              <NavLink to="/layout" activeClassName="active">
                Layout
              </NavLink>
            </Aside>
            <Content className="content-content">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/icon" />
                </Route>
                {routes.map((route) => {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      render={() => <route.component />}
                    />
                  )
                })}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  )
}
