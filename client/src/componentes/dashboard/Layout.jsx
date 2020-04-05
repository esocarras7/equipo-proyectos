import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { obtenerProyectosUsuario } from "../../acciones/accionesProyectos";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Spinner from "../comunes/Spinner";
import NavLateral from "../comunes/NavLateral";
import NavSuperior from "../comunes/NavSuperior";
import Dashboard from "./Dashboard";
import Tasks from "./tareas/Tareas";
import Project from "./proyectos/Proyectos";
import NotFound from "../404/404";

import "../../estilos/Layout.scss";

class Layout extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, projectsLoading } = this.props.projects;

    let dashboardContent;

    if (projects === null || projectsLoading) {
      dashboardContent = <Spinner />;
    } else if (projects.length > 0) {
      dashboardContent = (
        <>
          <NavLateral projects={projects} />
          <div className="right">
            <NavSuperior />
            <Switch>
              <Route
                exact
                path="/dashboard"
                projects={projects}
                component={Dashboard}
              />
              <Route
                exact
                path="/tasks"
                projects={projects}
                component={Tasks}
              />
              <Route exact path="/projects/:project" component={Project} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      );
    } else {
      dashboardContent = (
        <>
          <NavLateral />
          <div className="right">
            <NavSuperior />
            <Switch>
              <Route
                exact
                path="/dashboard"
                projects={[]}
                component={Dashboard}
              />
              <Route exact path="/tasks" component={Tasks} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      );
    }

    return (
      <Router>
        <div className="wrapper">{dashboardContent}</div>
      </Router>
    );
  }
}

Layout.propTypes = {
  autenticacion: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  autenticacion: state.autenticacion,
  projects: state.projects
});

export default withRouter(
  connect(
    mapStateToProps,
    { obtenerProyectosUsuario }
  )(Layout)
);

