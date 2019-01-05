import React from 'react';
import './login.css';
import * as request from 'superagent';
//
class Login extends React.Component {
	BASE_URL = 'http://localhost:8082/';
	constructor() {
		super();
		this.state = {
			loging: false,
			msg: null
		};
	}
	//
	registrarUsuario(e) {
		e.preventDefault();
		this.setState({ loging: true, msg: null })
		const data = new FormData(e.target);
		var vars = { email: data.get('email'), pass: data.get('pass') }
		request
			.post(this.BASE_URL + 'user/login')
			.send(vars)
			.end((err, res) => {
				this.setState({ loging: false })
				//si es ok, pasamos a la siguiente página
				var result = res.body;
				if (result.result == "Ok") {
					//enviamos a la siguiente página
				} else {
					this.setState({ msg: "Usuario o contraseña incorrectos" })
				}
			})
	}
	//
	render() {
		return (
			<div className="login valign-wrapper row">
				<div className="container">
					<div className="center-align col s12 m6 l4 offset-m3 offset-l4">
						<div className="card white">
							<div className="card-content">
								<span className="card-title">Ingresar</span>
								<form className="row" id="login-form" onSubmit={this.registrarUsuario.bind(this)}>
									<div className="input-field">
										<input className="validate valid" id="email" name="email" required type="email" />
										<label htmlFor="email" className="active">Correo</label>
									</div>
									<div className="input-field">
										<input className="validate valid" id="pass" name="pass" required type="password" />
										<label htmlFor="pass" className="active">Contraseña</label>
									</div>
									<button type="submit" className="btn">Ingresar</button>
									{this.state.loging &&
										<div className="progress">
											<div className="indeterminate"></div>
										</div>
									}
									{this.state.msg &&
										<div className="red-text mensaje">{this.state.msg}</div>
									}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
