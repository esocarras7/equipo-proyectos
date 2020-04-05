
## Stack (MERN & Redux)

Este proyecto usa las siguientes tecnologías:

- [MongoDB](https://www.mongodb.com/) para base de datos 
- [Express.js](http://expressjs.com/) como Node web framework
- [React.js](https://reactjs.org) para el cliente, [React Router](https://reacttraining.com/react-router/) para enrutamiento & [Redux](https://redux.js.org/basics/usagewithreact) para el manejo del estado
- [Node.js](https://nodejs.org/en/) para el servidor
- [SASS](https://sass-lang.com/) como CSS preprocessor (no CSS frameworks)
- [Create React App](https://github.com/facebook/create-react-app) para bootstrapping client

#### General

- [x] Authenticacion
- [x] Vista de Dashboard 

#### Proyectos

- [x] Crear y buscar proyectos del equipo
- [x] Editar proyectos del equipo
- [x] Eliminar proyectos del equipo (solo un usuario propietario de un proyecto podrá ser capaz de eliminarlo)
- [x] Acceder a proyectos compartidos

#### Tareas

- [x] Crear, establecer plazo para tareas asignadas a equipos
- [x] Actualizar tareas
- [x] Completar y eliminar tareas


## Inicio rápido

Levantar y correr el servidor de desarrollo usando los siguientes comandos en un terminal

```javascript
// Instala todas las dependencias para el cliente y el servidor
npm run full-install

// Corre el cliente y el servidor de desarrollo simultáneamente
npm run dev

// Asume que Node y npm están instalados en la máquina
// Asume que MongoDB está instalado en la máquina
// El servidor corre en http://localhost:5000 (cambiar en server.js) y el cliente en http://localhost:3000 (por defecto en Create React App)
```
