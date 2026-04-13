<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:0EA5E9,40:22C55E,100:F59E0B&text=ConectaUNET&fontAlignY=38&desc=Vida%20universitaria%20en%20un%20solo%20lugar%20%7C%20University%20life%20in%20one%20place&descAlignY=60&fontColor=ffffff" alt="ConectaUNET Banner" />
</p>

<p align="center">
	<a href="#-espanol">ES</a> | <a href="#-english">EN</a>
</p>

<p align="center">
	<img alt="Vue" src="https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white" />
	<img alt="Node" src="https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white" />
	<img alt="Express" src="https://img.shields.io/badge/Express-5-black?logo=express&logoColor=white" />
	<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" />
	<img alt="Mobile First" src="https://img.shields.io/badge/Design-Mobile%20First-0ea5e9" />
</p>

---

## Espanol

### Acerca del proyecto

ConectaUNET es una plataforma colaborativa para la comunidad universitaria de la UNET.
Su objetivo es centralizar la informacion de:

- Eventos culturales, academicos y estudiantiles.
- Emprendimientos creados por estudiantes.
- Publicaciones de interes para la vida universitaria.

El proyecto sigue un enfoque **Mobile First** para priorizar una excelente experiencia en dispositivos moviles.

### Tabla de contenido

- [Acerca del proyecto](#acerca-del-proyecto)
- [Arquitectura](#arquitectura)
- [Tecnologias](#tecnologias)
- [Puesta en marcha local](#puesta-en-marcha-local)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [API](#api)
- [Enlaces del proyecto](#enlaces-del-proyecto)
- [Equipo 11](#equipo-11)

### Arquitectura

El monorepo se organiza en dos aplicaciones principales:

- `frontend/`: App cliente en Vue + Vite + Tailwind.
- `backend/`: API REST en Node.js + Express + MongoDB.

Estructura general:

```text
ConectaUNET/
|-- frontend/   # Interfaz web (cliente)
`-- backend/    # API, modelos y controladores
```

### Tecnologias

- Frontend: Vue 3, Vue Router, Vite, Tailwind CSS.
- Backend: Node.js, Express 5, Mongoose, JWT, Multer.
- Base de datos: MongoDB.

### Puesta en marcha local

Requisitos recomendados:

- Node.js 20+
- npm 10+
- MongoDB local o remoto

1. Clonar el repositorio.
2. Instalar dependencias del backend y frontend.
3. Crear variables de entorno del backend.
4. Levantar backend y frontend en terminales separadas.

#### 1) Instalar backend

```bash
cd backend
npm install
```

#### 2) Crear archivo de entorno backend

En `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/conectaunet
JWT_SECRET=coloca_aqui_un_secreto_seguro
```

Nota: El frontend tiene proxy configurado hacia `http://localhost:5000`, por eso se recomienda usar `PORT=5000`.

#### 3) Levantar backend

```bash
cd backend
npm run dev
```

#### 4) Instalar y levantar frontend

```bash
cd frontend
npm install
npm run dev
```

### Variables de entorno

Variables usadas por la API:

- `PORT`: Puerto del servidor (fallback: `3000`).
- `MONGO_URI`: Conexion a MongoDB (fallback local incluido).
- `JWT_SECRET`: Clave para firmar tokens JWT.

### Scripts disponibles

Backend (`backend/package.json`):

- `npm run dev`: Inicia servidor con nodemon.
- `npm start`: Inicia servidor en modo normal.
- `npm run seed`: Ejecuta semilla de datos.

Frontend (`frontend/package.json`):

- `npm run dev`: Inicia Vite en desarrollo.
- `npm run build`: Genera build de produccion.
- `npm run preview`: Previsualiza build local.

### API

- Health check: `GET /api/health`
- Base URL local esperada: `http://localhost:5000`
- Documentacion detallada de endpoints: `backend/docs/endpoints.md`

### Enlaces del proyecto

- Diseno UI/UX (Figma): https://www.figma.com/design/EU3E9ctU3psxUbATXqMH4m/ConectaUNET?node-id=0-1&t=unonzLhXC4o5f1z7-1
- Referencia StageU: https://github.com/FerdVI/StageU
- Referencia EmprendiUNET: https://github.com/AngelVivas-20005/EmprendiUNET

### Equipo 11

| Nombre | Cedula de Identidad |
| :--- | :--- |
| Juan Paredes | 31.357.791 |
| Jose Bravo | 31.122.695 |
| Angel Vivas | 30.890.743 |
| Sebastian Ramirez | 31.564.908 |
| Fabian Ramirez | 31.098.593 |

---

## English

### About the project

ConectaUNET is a collaborative platform built for the UNET university community.
Its mission is to centralize information about:

- Cultural, academic, and student events.
- Student-led entrepreneurship initiatives.
- Relevant posts for campus life.

The product follows a **Mobile First** approach to provide a great mobile experience from day one.

### Table of contents

- [About the project](#about-the-project)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Local setup](#local-setup)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [API](#api-1)
- [Project links](#project-links)
- [Team 11](#team-11)

### Architecture

This monorepo is split into two main apps:

- `frontend/`: Client app built with Vue + Vite + Tailwind.
- `backend/`: REST API built with Node.js + Express + MongoDB.

General structure:

```text
ConectaUNET/
|-- frontend/   # Client application
`-- backend/    # API, models, controllers
```

### Tech stack

- Frontend: Vue 3, Vue Router, Vite, Tailwind CSS.
- Backend: Node.js, Express 5, Mongoose, JWT, Multer.
- Database: MongoDB.

### Local setup

Recommended requirements:

- Node.js 20+
- npm 10+
- Local or remote MongoDB instance

1. Clone the repository.
2. Install backend and frontend dependencies.
3. Create backend environment variables.
4. Run backend and frontend in separate terminals.

#### 1) Install backend

```bash
cd backend
npm install
```

#### 2) Create backend env file

In `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/conectaunet
JWT_SECRET=put_a_secure_secret_here
```

Note: The frontend proxy points to `http://localhost:5000`, so using `PORT=5000` is recommended.

#### 3) Run backend

```bash
cd backend
npm run dev
```

#### 4) Install and run frontend

```bash
cd frontend
npm install
npm run dev
```

### Environment variables

API variables:

- `PORT`: Server port (fallback: `3000`).
- `MONGO_URI`: MongoDB connection string (local fallback included).
- `JWT_SECRET`: Secret key for JWT signing.

### Available scripts

Backend (`backend/package.json`):

- `npm run dev`: Starts server with nodemon.
- `npm start`: Starts server in normal mode.
- `npm run seed`: Seeds initial data.

Frontend (`frontend/package.json`):

- `npm run dev`: Starts Vite dev server.
- `npm run build`: Builds for production.
- `npm run preview`: Previews production build locally.

### API

- Health check: `GET /api/health`
- Expected local base URL: `http://localhost:5000`
- Full endpoint reference: `backend/docs/endpoints.md`

### Project links

- UI/UX Design (Figma): https://www.figma.com/design/EU3E9ctU3psxUbATXqMH4m/ConectaUNET?node-id=0-1&t=unonzLhXC4o5f1z7-1
- StageU reference project: https://github.com/FerdVI/StageU
- EmprendiUNET reference project: https://github.com/AngelVivas-20005/EmprendiUNET

### Team 11

| Name | ID |
| :--- | :--- |
| Juan Paredes | 31.357.791 |
| Jose Bravo | 31.122.695 |
| Angel Vivas | 30.890.743 |
| Sebastian Ramirez | 31.564.908 |
| Fabian Ramirez | 31.098.593 |

---

<p align="center">
	Built for Multimedia @ UNET
</p>