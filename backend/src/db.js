import dotenv from 'dotenv';
import { Pool } from 'pg';

// Carga variables de entorno desde el archivo .env
dotenv.config();

// Configuración del pool de PostgreSQL
const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT || 5432),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

// Función reutilizable para ejecutar consultas SQL
export async function query(text, params) {
  return pool.query(text, params);
}

// Exportar el pool por si necesitamos hacer transacciones o cerrar la conexión
export default pool;
