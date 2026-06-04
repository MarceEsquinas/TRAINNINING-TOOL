import express from 'express';
import { getAtletas, postAtletas } from '../controllers/atletasController.js';

const router = express.Router();

// Ruta para listar atletas.
router.get('/atletas', getAtletas);

// Ruta para crear un nuevo atleta.
router.post('/atletas',postAtletas);

export default router;
