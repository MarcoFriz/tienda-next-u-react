import React from 'react';
import { Link } from 'react-router-dom';
//
class Tienda extends React.Component {
	constructor(props) {
		super(props)
		this.state = { total: 10, list: [] };
		console.log(props);
	}
	componentWillReceiveProps(next_props) {
		var products = next_props.products;
		var cart = next_props.cart;
		if (cart != null) {
			var list = products.filter(item => {
				for (let i in cart) {
					if (cart[i].id == item.id) return true;
				}
				return false;
			})
			this.setState({ list: list });
		}
		console.log(cart);
	}
	render() {
		const total = this.state.total;
		const list = this.state.list;
		//tipo card
		return (
			<div className="tienda">
				<div className="card">
					<div>
						<div className="card-content">
							<div className="card-title">Carrito de Compras</div>
							<div className="row" content="">
								<hr />
								<div className="lista">
									<div className="col s6">
										<div>
											<ul className="collection">
												{list.map(item =>
													<li>item.nombre</li>
												)}
											</ul>
										</div>
									</div>
									<div className="col s6">
										<h1>
											Total: <i> $ {total}</i>
										</h1>
										<Link className="btn waves-effect red" to="/vitrina">Cancelar</Link>
										<a className="btn waves-effect">Pagar</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
//
export default Tienda;
