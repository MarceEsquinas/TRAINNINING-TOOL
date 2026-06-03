import express from 'express';
import { getTestRoute } from '../controllers/testController.js';

const router = express.Router();

// Ruta de prueba que se conecta con el controlador correspondiente.
// Se montará en server.js como parte de la colección de rutas del servidor.
router.get('/test', getTestRoute);

export default router;
