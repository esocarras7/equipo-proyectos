import React, { Component } from "react";
import "../../../estilos/ContenidoPrincipal.scss";
import { connect } from "react-redux";

import Modal from "../modal/Modal";

class Tasks extends Component {
  state = {
    modal: false
  };

  toggleModal = e => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    const { projects } = this.props.projects;

    return (
      <div className="main-content">
        <h1 className="header">Tus tareas</h1>
        <div className="projects">
          <div className="no-projects">
            <h1 className="header">Usted no tiene tareas</h1>
            {projects.length > 0 ? (
              <p>Visite un proyecto para crear su primera tarea</p>
            ) : (
              <button className="main-btn" onClick={this.toggleModal}>
                Cree su primer proyecto
              </button>
            )}
            <Modal onClose={this.toggleModal} modal={this.state.modal} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  {}
)(Tasks);
