import React from 'react';

class Catalogo extends React.Component {
	render() {
		return (
			<div className="card-panel catalogo">
				<header className="row">
					<h1 className="col s8">
						Catálogo De Productos
					</h1>
					<div className="col s4" label="¿Qué estás buscando?" _nghost-bot-5="" ng-reflect-label="¿Qué estás buscando?">
						<form action="null" className="ng-untouched ng-pristine ng-valid">
							<div className="input-field">
								<input id="search" name="search" required="" type="search" />
								<label for="search" className="">
									¿Qué estás buscando?<i className="material-icons right">search</i>
								</label>
							</div>
						</form>
					</div>
				</header>
				<hr />
				<div className="progress">
					<div className="indeterminate"></div>
				</div>
				<div className="row productos">
					<div className="producto col s4 card">
						<div content>
							<p><b>Precio: </b>item.precio </p>
							<p><b>Unidades disponibles: </b> item.stock </p>
						</div>
						<div className="card-action with-cols">
							<a className='col s4 btn blue'>Ver más</a>
							<a className='col s4 offset-s1 btn yellow darken-2 waves-effect'>Añadir</a>
							<input className="col offset-s1 s2" id="'cant-'+item.id" type="number" name="cant" value="1" />
						</div>
					</div>
				</div >
			</div >
		);
	}
}
//
export default Catalogo;
