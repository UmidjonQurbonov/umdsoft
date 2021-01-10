import React, { Component } from 'react'
import './app.scss'
import { Layout } from './hoc'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages'


class app extends Component {
	

	render() {

		return (
			<div>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
					</Switch>
				</Layout>
			</div>	
		);
	}
}

export default app;