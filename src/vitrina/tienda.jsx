import React from 'react';
import { Link } from 'react-router-dom';

class Tienda extends React.Component {
	render() {
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
											</ul>
										</div>
									</div>
									<div className="col s6">
										<h1>
											Total: <i> $ 0 </i>
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
