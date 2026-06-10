import express from 'express';
import {
  getSesionesEntrenamiento,
  getSesionEntrenamientoById,
  postSesionEntrenamiento,
  updateSesionEntrenamientoById,
  deleteSesionEntrenamientoById,
} from '../controllers/sesionEntrenamientoController.js';

const router = express.Router();

// Ruta para listar todas las sesiones de entrenamiento.
router.get('/sesionesEntrenamiento', getSesionesEntrenamiento);

// Ruta para obtener una sesión de entrenamiento por su id.
router.get('/sesionesEntrenamiento/:id', getSesionEntrenamientoById);

// Ruta para actualizar una sesión de entrenamiento por id.
router.put('/sesionesEntrenamiento/:id', updateSesionEntrenamientoById);

// Ruta para borrar una sesión de entrenamiento por id.
router.delete('/sesionesEntrenamiento/:id', deleteSesionEntrenamientoById);

// Ruta para crear una nueva sesión de entrenamiento.
router.post('/sesionesEntrenamiento', postSesionEntrenamiento);

export default router;
