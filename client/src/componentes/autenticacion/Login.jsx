import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { iniciarSesionUsuario } from "../../acciones/accionesAutenticacion";

import "../../estilos/Auth.scss";

class Login extends Component{
   constructor(){
       super();
       this.state = {
           email: "",
           password: "",
           errors: {}
       }
   }

   componentDidMount(){
       //Si inició sesión y el usuario navega a la página de inicio de sesión, se redirige al dashboard
       if (this.props.autenticacion.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
   }

   componentWillReceiveProps(nextProps){
       if(nextProps.autenticacion.isAuthenticated){
           this.props.history.push("/dashboard");
       }

       if(nextProps.errors){
        this.setState({
            errors: nextProps.errors
          });
       }
   }

   onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
   };

   onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.iniciarSesionUsuario(userData);

    };

    fillDemoEmail = () => {
        this.setState({ email: "test@test.com" });
    };

    fillDemoPassword = () => {
        this.setState({ password: "test123" });
    };

    render() {
        const { errors } = this.state;
    
        return (
          <div className="base-wrapper">
            <div className="auth-header">Registrarse</div>
            <form className="auth-form" noValidate onSubmit={this.onSubmit}>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Dirección de correo</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {errors.email}
                    {errors.emailnotfound}
                  </div>
                </label>
              </div>
    
              <div className="auth-group">
                <label>
                  <div className="auth-label">Contraseña</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {errors.password}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
    
              <div>
                <button type="submit" className="auth-button">
                  Inciar sesión
                </button>
              </div>
              <div className="bottom-group">
                <Link to="/register" className="link">
                  Regístrese
                </Link>
              </div>
            </form>
          </div>
        );
    }
}

Login.propTypes = {
    iniciarSesionUsuario: PropTypes.func.isRequired,
    autenticacion: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    autenticacion: state.autenticacion,
    errors: state.errors
});

export default connect(mapStateToProps, { iniciarSesionUsuario })(Login);
