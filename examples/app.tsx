import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Header from './components/header'
import routes from './routes'
import './style.scss'

export default function BasicExample() {
  return (
    <div>
      <Header />
      <Router>
        <div className="body">
          <div className="sidebar">
            <h1>组件</h1>
            <ul>
              <li>
                <Link to="/icon">Icon</Link>
              </li>
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/dialog">Dialog</Link>
              </li>
              <li>
                <Link to="/layout">Layout</Link>
              </li>
            </ul>
          </div>
          <div className="main">
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
          </div>
        </div>
      </Router>
    </div>
  )
}
