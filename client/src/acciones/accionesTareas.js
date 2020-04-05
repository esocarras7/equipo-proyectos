import axios from "axios";

import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  TASKS_LOADING
} from "./tiposAcciones";

//Crear tarea
export const crearTarea = taskData => dispatch => {
  axios.post("/api/tasks/create", taskData)
      .then(res => 
        dispatch({
            type: CREATE_TASK,
            payload: res.data
        }))
      .catch(err => console.log(err));
};

//Obtener tareas por id del proyecto
export const obtenerTareas = id => dispatch => {
    dispatch(cargandoTareas());
    axios.get(`/api/tasks/${id}`)
        .then(res => 
          dispatch({
            type: GET_TASKS,
            payload: res.data
          })
        )
        .catch(err => 
          dispatch({
            type: GET_TASKS,
            payload: null
          })
        );
};

//Eliminar tarea
export const eliminarTarea = id => dispatch => {
    axios.delete(`/api/tasks/delete/${id}`)
        .then(res => 
          dispatch({
            type: DELETE_TASK,
            payload: id
          })
        )
        .catch(err => console.log(err));
};

//Actualizar tarea
export const actualizarTarea = taskData => dispatch => {
    axios.patch("/api/tasks/update", taskData)
        .then(res =>
          dispatch({
             type: UPDATE_TASK,
             payload: res.data 
          })
        )
        .catch(err => console.log(err));
};

//Cargando tareas
export const cargandoTareas = () => {
  return {
    type: TASKS_LOADING
  };
};