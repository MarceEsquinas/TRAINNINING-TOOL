# SemanaEntrenamiento

## Propósito

`SemanaEntrenamiento` representa un bloque semanal de planificación dentro de un `Objetivo`.
Cada semana guarda la fecha de inicio y la fecha de fin de un ciclo de entrenamiento de 7 días.

## Atributos actuales

- `id`
- `objetivo_id`
- `fecha_inicio`
- `fecha_fin`

## Estado actual de la implementación

- El backend expone `POST /semanasEntrenamiento`.
- Hoy la creación es manual:
  - el cliente envía `objetivo_id`, `fecha_inicio` y `fecha_fin`.
- Existe un controlador `postSemanaEntrenamiento` en `backend/src/controllers/semanaEntrenamientoController.js`.
- La ruta `backend/src/routes/semanaEntrenamientoRoute.js` sigue el patrón REST del proyecto.

## Regla futura de automatización

La idea para la mejora es:

1. La primera semana de un objetivo se crea manualmente.
   - El cliente aporta `fecha_inicio`.
   - El backend calcula `fecha_fin = fecha_inicio + 6 días`.
2. A partir de la segunda semana, el backend genera las fechas automáticamente.
   - Busca la última semana creada para el mismo `objetivo_id`.
   - Calcula `fecha_inicio = ultima_fecha_fin + 1 día`.
   - Calcula `fecha_fin = fecha_inicio + 6 días`.

### Ejemplo de fechas

- Semana actual termina el `2026-12-11`.
- Nueva semana:
  - `fecha_inicio = 2026-12-12`
  - `fecha_fin = 2026-12-18`

Esto asegura una secuencia de semanas sin solapamiento cuando siempre se usan bloques de 7 días.

## Comportamiento esperado

- Para el primer registro de un objetivo:
  - se acepta `fecha_inicio` manual
  - se calcula `fecha_fin`
- Para registros siguientes:
  - solo es obligatorio `objetivo_id`
  - el backend decide `fecha_inicio` y `fecha_fin`
- No debería haber solapamiento con semanas anteriores.

## Puntos de implementación

- `postSemanaEntrenamiento` debe mantener:
  - `Route` → `Controller` → `Query`
- La lógica adicional se hace en el controller, no en la ruta.
- El controller debe:
  1. recibir `objetivo_id`
  2. buscar la última semana de ese objetivo
  3. si existe, calcular fechas nuevas automáticamente
  4. si no existe, usar la fecha manual enviada para la primera semana
  5. insertar la nueva semana en la tabla `semana_entrenamiento`

## Buenas prácticas para la mejora

- Validar `objetivo_id` siempre.
- Usar formato ISO `YYYY-MM-DD` para fechas.
- Mantener la duración fija en 7 días.
- No permitir que el cliente envíe `fecha_fin` en la segunda semana en adelante.
- Registrar en la documentación el comportamiento actual y el plan de evolución.

## Relación con otras entidades

- `Atleta` → `Objetivo` → `SemanaEntrenamiento`
- `SemanaEntrenamiento` depende de un `objetivo_id`.
- En el futuro, una semana puede relacionarse con sesiones y feedback semanal.
