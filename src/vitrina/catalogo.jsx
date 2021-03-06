import React from 'react';
import { Link } from 'react-router-dom';
import * as request from 'superagent';
//
import './catalogo.css';

/**
props: products, onAdd(id, cant);
*/
class Catalogo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { filtro: '' }
	}
	//
	addToCart(id) {
		var cant = document.getElementById("item-" + id).value;
		if (this.props.onAdd) {
			this.props.onAdd(id, cant);
		}
	}
	//
	onChangeHandler(event) {
		this.setState({ filtro: event.target.value })
	}
	//
	render() {
		const products = this.props.products;
		const filtro = this.state.filtro.toLowerCase();
		return (
			<div className="card-panel catalogo">
				<header className="row">
					<h1 className="col s8">
						Catálogo De Productos
					</h1>
					<div className="col s4">
						<form>
							<div className="input-field">
								<i className="material-icons right">search</i>
								<input id="search" name="search" required="" type="search" onChange={this.onChangeHandler.bind(this)} />
								<label htmlFor="search" className="">
									¿Qué estás buscando?
								</label>
							</div>
						</form>
					</div>
				</header>
				<hr />
				{(products == null)
					?
					(<div className="progress">
						<div className="indeterminate"></div>
					</div>)
					:
					(<div className="row productos">
						{products
							.filter(item => item.nombre.toLowerCase().includes(filtro))
							.map(item =>
								<div className="producto col s4" key={item.id}>
									<div className="card medium">
										<div className="card-image">
											<img src={item.imagen} />
											<span className="card-title card-gradient">{item.nombre}</span>
										</div>
										<div className='card-content'>
											<p><b>Precio: </b> $ {item.precio} </p>
											<p><b>Unidades disponibles: </b> {item.stock} </p>
										</div>
										<div className="card-action with-cols">
											<Link className='col s4 btn blue' to={`vitrina/producto/` + item.id}>Ver más</Link>
											<a className='col s4 offset-s1 btn yellow darken-2 waves-effect' href="#" onClick={this.addToCart.bind(this, item.id)}>Añadir</a>
											<input className="col offset-s1 s2" id={'item-' + item.id} type="number" name="cant" defaultValue="1" />
										</div>
									</div>
								</div>
							)}
					</div >
					)}
			</div >
		);
	}
}
//
export default Catalogo;
