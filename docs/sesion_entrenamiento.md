# SesionEntrenamiento

## Propósito

`SesionEntrenamiento` representa una sesión individual dentro de una `SemanaEntrenamiento`.
Cada sesión describe qué se debe hacer en un día o parte de un día, sin fijar una fecha exacta dentro de la semana.

## Atributos actuales

- `id`
- `semana_id`
- `orden`
- `descripcion`
- `kilometros_planificados`

## Estado actual de la implementación

- El backend expone `POST /sesionesEntrenamiento`.
- Se pueden listar, obtener por id, crear, actualizar y borrar sesiones.
- El controlador actual está en `backend/src/controllers/sesionEntrenamientoController.js`.
- La ruta está en `backend/src/routes/sesionEntrenamientoRoute.js`.
- El `server.js` monta esta ruta con `app.use('/', sesionEntrenamientoRoute);`.

## Comportamiento actual

- `POST /sesionesEntrenamiento` requiere:
  - `semana_id`
  - `orden`
  - `descripcion`
- `kilometros_planificados` es opcional.
- Cada sesión pertenece a una `semana_entrenamiento` y utiliza `semana_id` como FK.
- El campo `orden` permite definir el orden dentro de la semana.

## Patrón de implementación

Se sigue exactamente el mismo patrón REST que el resto de las entidades:

- `routes` define los endpoints y asigna controladores.
- `controllers` leen `req.params` / `req.body`.
- `controllers` realizan consultas SQL con `query(...)`.
- `controllers` responden con `res.status(...).json(...)`.

## Buenas prácticas para futuras mejoras

1. Validar que `semana_id` corresponde a una semana existente.
2. Asegurar que `orden` es único dentro de una misma `semana_id` (ya lo hace la base de datos con la constraint `UNIQUE (semana_id, orden)`).
3. Establecer reglas de negocio adicionales según el tipo de sesión:
   - `descripcion` clara y legible.
   - `kilometros_planificados` solo si aplica al tipo de sesión.
4. Mantener la entidad independiente de fechas exactas, ya que la semana ya define el intervalo de tiempo.

## Relación con otras entidades

- `SesionEntrenamiento` pertenece a `SemanaEntrenamiento`.
- La relación es 1:N: una semana puede tener varias sesiones.
- En el futuro, cada sesión podría relacionarse con métricas de ejecución o feedback específico.
