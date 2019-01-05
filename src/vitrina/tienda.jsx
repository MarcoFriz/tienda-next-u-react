import React from 'react';
import { Link } from 'react-router-dom';
/**
* props: onBuy(), products, cart, pagando
*/
class Tienda extends React.Component {
	constructor(props) {
		super(props)
		this.state = { total: 0, list: [] };
	}
	componentWillMount() {
		var next_props = this.props;
		var products = next_props.products;
		var cart = next_props.cart;
		var total = 0;
		if (cart && products) {
			var list = products.filter(item => {
				for (let i in cart) {
					if (i == "id_" + item.id) {
						item.cant = cart[i];
						item.total = item.cant * item.precio;
						total += item.total;
						return true;
					}
				}
				return false;
			})
			this.setState({ total: total, list: list });
		}
	}
	render() {
		const total = this.state.total;
		const list = this.state.list;
		return (
			<div className="tienda">
				<div className="card">
					<div className="card-content">
						<div className="card-title">Carrito de Compras</div>
						<div className="row" content="">
							<hr />
							<div className="lista">
								<div className="col s6">
									<div>
										<ul className="collection">
											{list.map(item =>
												<li className="collection-item avatar">
													<img className="circle" src={"/" + item.imagen} alt={item.nombre} />
													<div className="title"><b>{item.nombre}</b></div>
													<p>
														<i>Unidades: </i>{item.cant}
														<br />
														<i>Subtotal: </i>${item.total}
													</p>
												</li>
											)}
										</ul>
									</div>
								</div>
								<div className="col s6">
									{(this.props.pagando &&
										<div className="progress">
											<div className="indeterminate"></div>
										</div>)}
									<h1>
										Total: <i> $ {total}</i>
									</h1>
									<Link className="btn waves-effect red" to="/vitrina">Cancelar</Link>
									<a className="btn waves-effect" href="#" onClick={this.buy.bind(this)}>Pagar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	//
	buy() {
		if (this.props.onBuy) {
			this.props.onBuy();
		}
	}
}
//
export default Tienda;
