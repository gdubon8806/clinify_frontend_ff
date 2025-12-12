# Clinify Frontend

Este proyecto es un frontend de ejemplo para una app de gestión de citas médicas, desarrollado en JavaScript vanilla usando el patrón MVC, HTML y CSS plano.

## Características principales
- Tres pantallas principales: Clientes, Doctores y Citas.
- CRUD completo (crear, editar, eliminar, listar) para cada entidad, realizado en memoria tras la carga inicial.
- Obtiene los datos del backend (.NET API) solo al inicio (GET), luego todas las operaciones CRUD se hacen en memoria (no afectan el backend).
- Uso de patrones de diseño:
  - **Builder** para la construcción dinámica de formularios.
  - **Factory Method** para la creación de botones reutilizables.
- UI moderna y responsiva.

## Estructura del proyecto
- `index.html`: Página principal y navegación.
- `style.css`: Estilos generales.
- `js/app.js`: Inicialización y enrutamiento.
- `js/mvc/`: Carpeta con la implementación MVC y patrones de diseño.
  - `model.js`: Modelos y lógica de datos.
  - `view.js`: Renderizado de vistas.
  - `controller.js`: Controladores.
  - `builder.js`: Builder para formularios.
  - `buttonFactory.js`: Factory Method para botones.

## ¿Cómo funciona?
1. Al cargar la app, se hace una petición GET al backend para obtener los datos de clientes, doctores y citas.
2. Todas las operaciones de agregar, editar y eliminar se realizan en memoria (no se envían al backend).
3. El usuario puede navegar entre las pantallas y gestionar los datos localmente.

## Notas
- Para conectar con tu backend real, ajusta las URLs en `model.js`.
- Este frontend es ideal para pruebas, prototipos o como base para una integración real.


