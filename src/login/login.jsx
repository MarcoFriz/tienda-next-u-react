import React from 'react';
import './login.css';
//
class Login extends React.Component {
	render() {
		return (
			<div className="login valign-wrapper row">
				<div className="container">
					<div className="center-align col s12 m6 l4 offset-m3 offset-l4">
						<div className="card white">
							<div className="card-content">
								<span className="card-title">Ingresar</span>
								<form className="row" id="login-form" role="form">
									<div className="input-field">
										<input className="validate valid" id="email" name="email" required="" type="email" />
										<label htmlFor="email" className="active">Correo</label>
									</div>
									<div className="input-field">
										<input className="validate valid" id="pass" name="pass" required="" type="password" />
										<label htmlFor="pass" className="active">Contraseña</label>
									</div>
									<button type="submit" className="btn">Ingresar</button>
									<div className="red-text mensaje"></div>
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
