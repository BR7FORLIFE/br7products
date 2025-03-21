# Sistema de Gestión de Alumnos

Este proyecto es una aplicación de sistema de gestión de alumnos con un backend desarrollado en Spring y un frontend en Angular. La aplicación permite la creación, lectura, actualización y eliminación de registros de alumnos.

## Tecnologías Utilizadas

- **Backend**: Spring Boot
- **Frontend**: Angular
- **Base de Datos**: MySQL

## Requisitos Previos

- Java 11 o superior
- Node.js y npm
- Angular CLI
- MySQL

## Instalación

### Backend (Spring Boot)

1. Clona el repositorio del backend:
    ```bash
    git clone <URL_DEL_REPOSITORIO_BACKEND>
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd backend
    ```
3. Configura la base de datos en `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/gestion_alumnos
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    ```
4. Ejecuta la aplicación:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend (Angular)

1. Clona el repositorio del frontend:
    ```bash
    git clone <URL_DEL_REPOSITORIO_FRONTEND>
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd frontend
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Ejecuta la aplicación:
    ```bash
    ng serve
    ```

## API

El backend expone una API RESTful para interactuar con el sistema de gestión de alumnos. Algunas de las rutas principales son:

- `GET /api/alumnos`: Obtiene la lista de todos los alumnos.
- `POST /api/alumnos`: Crea un nuevo alumno.
- `GET /api/alumnos/{id}`: Obtiene los detalles de un alumno específico.
- `PUT /api/alumnos/{id}`: Actualiza los detalles de un alumno específico.
- `DELETE /api/alumnos/{id}`: Elimina un alumno específico.

## Conexión entre Backend y Frontend

El frontend en Angular se comunica con el backend en Spring Boot a través de las API RESTful mencionadas anteriormente. Asegúrate de que ambos servidores (frontend y backend) estén en ejecución y configurados correctamente para permitir la comunicación.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de realizarlo.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
