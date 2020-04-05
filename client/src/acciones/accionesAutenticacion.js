import axios from "axios";
import setAuthToken from "../tools/setTokenAutenticacion";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./tiposAcciones";


//Registrar usuario
export const registrarUsuario = (userData, history) => dispatch => {
  axios.post("/api/users/register", userData)

      .then(res => history.push("/"))
      .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
      );
};


// Iniciar sesión - obtener token de usuario
export const iniciarSesionUsuario = userData => dispatch => {
    axios
      .post("/api/users/login", userData)
      .then(res => {
        //Guardar token en el localStorage
        const { token } = res.data;
        localStorage.setItem("jwtTokenTeams", JSON.stringify(token));
        // Guardar token en el header de la peticion
        setAuthToken(token);

        // Decodificar token para obtener datos del usuario
        const decoded = jwt_decode(token);

        // Establecer usuario actual
        dispatch(cambiarUsuarioActual(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};


  // Establecer usuario conectado
export const cambiarUsuarioActual = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
};


// Cargando usuario
export const cargandoUsuario = () => {
    return {
      type: USER_LOADING
    };
};


// Cerrar sesion de usuario
export const cerrarSesionUsuario = history => dispatch => {

    // Eliminar token desde el localStorage
    localStorage.removeItem("jwtTokenTeams");

    // Eliminar header para futuras peticiones
    setAuthToken(false);

    // Cambiar el usuario actual a un objeto vacio {} que pondra isAuthenticated a falso
    dispatch(cambiarUsuarioActual({}));

  
    history.push("/dashboard");
};
