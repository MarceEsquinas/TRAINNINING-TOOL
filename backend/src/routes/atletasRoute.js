import express from 'express';
import { getAtletas, getAtletaById, updateAtletaById, postAtletas, deleteAtletaById } from '../controllers/atletasController.js';

const router = express.Router();

// Ruta para listar todos los atletas.
router.get('/atletas', getAtletas);

// Ruta para obtener un atleta por su id.
// Ejemplo: GET /atletas/1
router.get('/atletas/:id', getAtletaById);

// Ruta para actualizar un atleta por su id.
// Ejemplo: PUT /atletas/1
router.put('/atletas/:id', updateAtletaById);

// Ruta para borrar un atleta por su id.
// Ejemplo: DELETE /atletas/1
router.delete('/atletas/:id', deleteAtletaById);

// Ruta para crear un nuevo atleta.
router.post('/atletas', postAtletas);

export default router;
