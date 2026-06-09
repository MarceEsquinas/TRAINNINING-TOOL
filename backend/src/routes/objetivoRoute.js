import express from 'express';
import {
  getObjetivos,
  getObjetivoById,
  postObjetivo,
  updateObjetivoById,
  deleteObjetivoById,
} from '../controllers/objetivoController.js';

const router = express.Router();

// Ruta para listar todos los objetivos.
router.get('/objetivos', getObjetivos);

// Ruta para obtener un objetivo por su id.
// Ejemplo: GET /objetivos/1
router.get('/objetivos/:id', getObjetivoById);

// Ruta para actualizar un objetivo por su id.
// Ejemplo: PUT /objetivos/1
router.put('/objetivos/:id', updateObjetivoById);

// Ruta para borrar un objetivo por id.
// Ejemplo: DELETE /objetivos/1
router.delete('/objetivos/:id', deleteObjetivoById);

// Ruta para crear un nuevo objetivo.
router.post('/objetivos', postObjetivo);

export default router;
