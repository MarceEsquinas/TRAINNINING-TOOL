import express from 'express';
import {
  getFeedback,
  getFeedbackById,
  postFeedback,
  updateFeedbackById,
  deleteFeedbackById,
} from '../controllers/feedbackController.js';

const router = express.Router();

// Ruta para listar todos los feedback.
router.get('/feedback', getFeedback);

// Ruta para obtener un feedback por su id.
router.get('/feedback/:id', getFeedbackById);

// Ruta para crear un nuevo feedback.
router.post('/feedback', postFeedback);

// Ruta para actualizar un feedback por id.
router.put('/feedback/:id', updateFeedbackById);

// Ruta para borrar un feedback por id.
router.delete('/feedback/:id', deleteFeedbackById);

export default router;
