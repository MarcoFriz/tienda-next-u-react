import React from 'react';
import { Link } from 'react-router-dom';
import './producto.css';

class Producto extends React.Component {
	constructor(props) {
		super(props);
		var product = null;
		if (props.products != null) {
			product = props.products.find(item => item.id == props.match.params.id);
		}
		this.state = { id: props.match.params.id, products: props.products, product: product };
	}
	componentWillReceiveProps(next_props) {
		var product = null;
		var id = next_props.match.params.id;
		var products = next_props.products;
		if (products != null) {
			product = products.find(item => item.id == id);
			this.setState({ product: product });
		}
	}
	//
	render() {
		const product = this.state.product;
		return (
			<div>
				{(product === null) ? (
					<div className="card">
						<div className="card-content">
							<div className="progress">
								<div className="indeterminate"></div>
							</div>
						</div>
					</div>
				) : (
						<div className="card horizontal">
							<div className="card-image">
								<img src={"/" + product.imagen} alt={product.nombre} />
							</div>
							<div className='card-stacked'>
								<div className='card-content'>
									<div className="card-title">{product.nombre}</div>
									<hr />
									<h4>Precio: <small>${product.precio}</small></h4>
									<h5>Unidades Disponibles: <small>{product.stock}</small></h5>
								</div>
								<div>
									<div className="card-action">
										<Link className="btn" to="/vitrina">Volver</Link>
									</div>
								</div>
							</div>
						</div>
					)}
			</div>
		)
	}
}
export default Producto;
