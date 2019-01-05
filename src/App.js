import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';
//
import Login from './login/login.jsx';
import Vitrina from './vitrina/vitrina.jsx';
//
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<div className="navbar-wrapper">
							App Work!!!
								<ul className="right">
								<li><Link to="/login">Login</Link></li>
								<li><Link to="/vitrina">Vitrina</Link></li>
							</ul>
						</div>
					</nav>
					<Route exact path='/'>
						<Redirect to='/login' />
					</Route>
					<Route path='/login' component={Login} />
					<Route path='/logout' component={Login} />
					<Route path='/vitrina' component={Vitrina} />
				</div>
			</Router>
		);
	}
}

export default App;
