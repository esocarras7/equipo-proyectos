import { combineReducers } from "redux";
import reductorAutenticacion from "./reductorAutenticacion";
import reductorError from "./reductorError";
import reductorProyectos from "./reductorProyectos";
import reductorTareas from "./reductorTareas";

export default combineReducers({
   autenticacion: reductorAutenticacion,
   errors: reductorError,
   projects: reductorProyectos,
   tareas: reductorTareas
});
