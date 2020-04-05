import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, autenticacion, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      autenticacion.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  autenticacion: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  autenticacion: state.autenticacion
});

export default connect(mapStateToProps)(PrivateRoute);