import axios from "axios";

import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  PROJECT_LOADING,
  GET_PROJECTS,
  PROJECTS_LOADING
} from "./tiposAcciones";

// Crear Proyecto
export const crearProyecto = projectData => dispatch => {
    axios.post("/api/projects/create", projectData)
        .then(res =>
            dispatch({
            type: CREATE_PROJECT,
            payload: res.data
            })
        )
        .catch(err => console.log(err));
  };
  
  // Actualizar Proyecto
  export const actualizarProyecto = projectData => dispatch => {
    axios.patch("/api/projects/update", projectData)
        .then(res =>
            dispatch({
            type: UPDATE_PROJECT,
            payload: res.data
            })
        )
        .catch(err => console.log(err));
  };
  
  // Eliminar Proyecto
  export const eliminarProyecto = (id, history) => dispatch => {
    axios.delete(`/api/projects/delete/${id}`)
        .then(res =>
            dispatch({
            type: DELETE_PROJECT,
            payload: id
            })
        )
        .then(res => history.push("/dashboard"))
        .catch(err => console.log(err));
  };
  
  // Obtener proyectos por id
  export const obtenerProyecto = id => dispatch => {
    dispatch(cargandoProyecto());
    axios.get(`/api/projects/${id}`)
        .then(res =>
            dispatch({
            type: GET_PROJECT,
            payload: res.data
            })
        )
        .catch(err =>
            dispatch({
            type: GET_PROJECT,
            payload: null
            })
        );
  };
  
  // Obtener todos los proyectos para un usuario específico
  export const obtenerProyectosUsuario = () => dispatch => {
    dispatch(cargandoProyectosUsuario());
    axios.get("/api/projects")
        .then(res =>
            dispatch({
            type: GET_PROJECTS,
            payload: res.data
            })
        )
        .catch(err =>
            dispatch({
            type: GET_PROJECTS,
            payload: null
            })
        );
  };
  
   // Cargando proyecto 
   export const cargandoProyecto = () => {
    return {
      type: PROJECT_LOADING
    };
  };

  // Cargando proyectos del usuario
  export const cargandoProyectosUsuario = () => {
    return {
      type: PROJECTS_LOADING
    };
  };
  