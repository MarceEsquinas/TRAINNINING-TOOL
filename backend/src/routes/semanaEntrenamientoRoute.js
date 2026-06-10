import express from 'express';
import {
  getSemanasEntrenamiento,
  getSemanaEntrenamientoById,
  postSemanaEntrenamiento,
  updateSemanaEntrenamientoById,
  deleteSemanaEntrenamientoById,
} from '../controllers/semanaEntrenamientoController.js';

const router = express.Router();

// Ruta para listar todas las semanas de entrenamiento.
router.get('/semanasEntrenamiento', getSemanasEntrenamiento);

// Ruta para obtener una semana de entrenamiento por su id.
router.get('/semanasEntrenamiento/:id', getSemanaEntrenamientoById);

// Ruta para actualizar una semana de entrenamiento por id.
router.put('/semanasEntrenamiento/:id', updateSemanaEntrenamientoById);

// Ruta para borrar una semana de entrenamiento por id.
router.delete('/semanasEntrenamiento/:id', deleteSemanaEntrenamientoById);

// Ruta para crear una nueva semana de entrenamiento.
router.post('/semanasEntrenamiento', postSemanaEntrenamiento);

export default router;
