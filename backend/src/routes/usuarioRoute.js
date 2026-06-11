import express from 'express';
import {
  getUsuarios,
  getUsuarioById,
  postUsuarios,
  updateUsuarioById,
  deleteUsuarioById,
} from '../controllers/usuarioController.js';

const router = express.Router();

// Ruta para listar todos los usuarios.
router.get('/usuarios', getUsuarios);

// Ruta para obtener un usuario por su id.
// Ejemplo: GET /usuarios/1
router.get('/usuarios/:id', getUsuarioById);

// Ruta para actualizar un usuario por su id.
// Ejemplo: PUT /usuarios/1
router.put('/usuarios/:id', updateUsuarioById);

// Ruta para borrar un usuario por su id.
// Ejemplo: DELETE /usuarios/1
router.delete('/usuarios/:id', deleteUsuarioById);

// Ruta para crear un nuevo usuario.
router.post('/usuarios', postUsuarios);

export default router;
