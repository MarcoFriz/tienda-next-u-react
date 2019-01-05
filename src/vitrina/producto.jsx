import React from 'react';

class Producto extends React.Component {
	render() {
		return (
			<div>
				<div className="card" title="Pesando el producto">
					<div content class="progress">
						<div class="indeterminate"></div>
					</div>
				</div>
				<div className="card">
					<div content>
						<hr />
						<h4>Precio: <small>$producto.precio</small></h4>
						<h5>Unidades Disponibles: <small>producto.stock</small></h5>
					</div>
					<div class="card-action">
						<a class="btn" routerLink="../..">Volver</a>
					</div>
				</div>
			</div>
		)
	}
}
export default Producto;
