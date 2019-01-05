import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalogo from './catalogo.jsx';
import Tienda from './tienda.jsx';
import Producto from './producto.jsx';
import './vitrina.css';
class Vitrina extends React.Component {
	render() {
		return (
			<div className="vitrina">
				<div className="container">
					<nav className="teal" items="items">
						<div className="nav-wrapper">
							<Link className="brand-logo" to="/vitrina">La Bodega</Link>
							<ul className="right">
								<li className="active">
									<Link to="/vitrina"><i className="material-icons">grid_on</i></Link>
								</li>
								<li>
									<Link to="/vitrina/tienda"><i className="material-icons">shopping_cart</i></Link>
								</li>
								<li>
									<Link to="/logout"><i className="material-icons">logout</i></Link>
								</li>
							</ul>
						</div>
					</nav>
					<div className="row">
						<Route exact path="/vitrina" component={Catalogo} />
						<Route path="/vitrina/tienda" component={Tienda} />
						<Route path="/vitrina/producto/:id" component={Producto} />
					</div>
				</div>
			</div>
		)
	}
}
//
export default Vitrina;
