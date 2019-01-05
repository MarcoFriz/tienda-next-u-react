import React from 'react';
import { Route, Link } from "react-router-dom";
import * as request from 'superagent';
//
import Catalogo from './catalogo.jsx';
import Tienda from './tienda.jsx';
import Producto from './producto.jsx';
import './vitrina.css';
//
class Vitrina extends React.Component {
	BASE_URL = 'http://localhost:8082/';
	constructor() {
		super();
		this.state = { products: null, cart: {}, total: 0 };
	}

	componentWillMount() {
		request
			.get(this.BASE_URL + 'product/all')
			.end((err, res) => {
				if (err || !res.ok) { console.log("Error", err); }
				else { this.setState({ products: res.body }); }
			});
	}

	render() {
		const cart = this.state.cart;
		return (
			<div className="vitrina">
				<div className="container">
					<nav className="teal" items="items">
						<div className="nav-wrapper">
							<Link className="brand-logo" to="/vitrina">La Bodega</Link>
							<ul className="right">
								<li>
									<Link to="/vitrina"><i className="material-icons">grid_on</i></Link>
								</li>
								<li>
									<Link to="/vitrina/tienda"><i className={"material-icons " + ((this.state.total > 0) ? 'counter' : '')} data-count={this.state.total}>shopping_cart</i></Link>
								</li>
								<li>
									<Link to="/logout"><i className="material-icons">logout</i></Link>
								</li>
							</ul>
						</div>
					</nav>
					<div className="row">
						<Route exact path="/vitrina" render={() => <Catalogo products={this.state.products} onAdd={this.addToCart.bind(this)} />} />
						<Route path="/vitrina/tienda" render={() => <Tienda products={this.state.products} cart={cart} />} />
						<Route path="/vitrina/producto/:id" render={(props) => <Producto products={this.state.products} {...props} />} />
					</div>
				</div>
			</div>
		)
	}
	//
	addToCart(id, cant) {
		var cart = this.state.cart;
		if (cart["id_" + id] === undefined) cart["id_" + id] = 0;
		cart["id_" + id] += Number(cant);
		var total = 0;
		for (let item in cart) {
			total += cart[item];
		}
		this.setState({ cart: cart, total: total });
	}
}
//
export default Vitrina;
