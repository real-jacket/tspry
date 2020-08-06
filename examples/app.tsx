import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Icon } from '../lib'
import Header from './components/header'
import routes from './routes'
import './style.scss'

export default function BasicExample() {
	return (
		<div>
			<Header />
			<Router>
				<div className='body'>
					<div className='sidebar'>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li>
								<Link to='/icon'>Icon</Link>
							</li>
						</ul>
					</div>
					<div className='main'>
						<Switch>
							{routes.map((route) => {
								return <Route key={route.path} exact path={route.path} render={() => <route.component />} />
							})}
							<Route path='/icon'>
								<Icon name='alipay' />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	)
}
