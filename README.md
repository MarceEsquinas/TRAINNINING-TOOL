girt# Training Tool

## Descripción
Training Tool es una aplicación web orientada a la gestión de entrenamientos de atletas amateurs muy enfocada a la adaptación de la persona.

El objetivo principal es permitir que un entrenador pueda planificar semanalmente entrenamientos personalizados, realizar un seguimiento de la evolución de sus atletas y adaptar la planificación en función del feedback recibido.

Este proyecto nace de una necesidad real: gestionar entrenamientos sin depender de WhatsApp y disponer de toda la información centralizada en una única aplicación.

---

## Objetivos del proyecto

- Gestionar atletas.
- Definir objetivos deportivos.
- Crear semanas de entrenamiento.
- Crear sesiones de entrenamiento.
- Recibir feedback semanal de los atletas.
- Consultar el histórico de entrenamientos.
- Detectar incidencias como molestias o semanas no completadas.

Además de ser una herramienta útil para el entrenamiento, este proyecto tiene un objetivo formativo para seguir aprendiendo:

- Desarrollo web.
- Arquitectura de aplicaciones.
- Bases de datos relacionales.
- Control de versiones con Git y GitHub.
- Buenas prácticas de programación.

---

## Tecnologías

### Backend

- Node.js
- Express (pendiente de implementación)

### Frontend

- JavaScript
- React (pendiente de implementación)

### Base de datos

- PostgreSQL

### Control de versiones

- Git
- GitHub

---

## Roles de usuario

### Administrador / Entrenador
Puede:

- Gestionar atletas.
- Gestionar objetivos.
- Gestionar semanas de entrenamiento.
- Gestionar sesiones de entrenamiento.
- Consultar el feedback de los atletas.

### Atleta
Puede:

- Iniciar sesión.
- Consultar su objetivo actual.
- Consultar sus semanas de entrenamiento.
- Consultar sus sesiones de entrenamiento.
- Enviar feedback semanal.
- Consultar su histórico.

---

## Entidades principales

- Usuario
- Atleta
- Objetivo
- SemanaEntrenamiento
- SesionEntrenamiento
- FeedbackSemanal

## Documentación adicional

- `docs/semana_entrenamiento.md`: descripción de la entidad `SemanaEntrenamiento` y la regla futura de automatización de fechas.
- `docs/sesion_entrenamiento.md`: descripción de la entidad `SesionEntrenamiento` y el comportamiento actual del CRUD.

---

## Estado actual

### Completado

- Análisis del negocio.
- Definición de requisitos funcionales.
- Diseño conceptual de la base de datos.
- Modelo relacional inicial.
- Diseño de entidades y relaciones.

### Pendiente

- Configuración del backend.
- Configuración del frontend.
- Implementación de PostgreSQL.
- Autenticación y autorización.
- Desarrollo de API REST.
- Desarrollo de interfaz de usuario.
- Despliegue de la aplicación.

---

## Filosofía del proyecto
La aplicación se está desarrollando siguiendo una premisa sencilla:

> Resolver un problema real con una solución simple, escalable y mantenible.
Se prioriza construir una primera versión funcional antes de incorporar características más avanzadas como estadísticas, integraciones externas o automatizaciones.

---

## Autor
Proyecto personal desarrollado como herramienta de gestión deportiva y aprendizaje de desarrollo de software.
