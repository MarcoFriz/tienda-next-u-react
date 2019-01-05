import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
//
import Login from './login/login.jsx';
import Vitrina from './vitrina/vitrina.jsx';
//
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Redirect exact path="/" to="/login" />
					</Switch>
					<Route path='/login' component={Login} />
					<Route path='/logout' component={Login} />
					<Route path='/vitrina' component={Vitrina} />
				</div>
			</Router>
		);
	}
}

export default App;
