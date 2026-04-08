# ConectaUNET — API Endpoints

Base URL: `http://localhost:5000/api`

Endpoints marcados con `AUTH` requieren el header:
```
Authorization: Bearer <token>
```

---

## Salud del servidor

### GET /health
Verifica que el servidor esté corriendo.

**Response:**
```json
{
  "success": true,
  "message": "Server is running normally"
}
```

---

## Auth — `/api/auth`

### POST /auth/register
Registra un nuevo usuario.

**Body:**
```json
{
  "name": "Juan Paredes",
  "username": "juanparedes",
  "email": "juan@unet.edu.ve",
  "password": "123456"
}
```

**Response 201:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Juan Paredes",
    "username": "juanparedes",
    "email": "juan@unet.edu.ve",
    "avatar": "",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error 400** (usuario o correo ya existe):
```json
{
  "success": false,
  "message": "El correo ya está en uso"
}
```

---

### POST /auth/login
Inicia sesión con correo **o** nombre de usuario.

**Body:**
```json
{
  "login": "juanparedes",
  "password": "123456"
}
```
> `login` puede ser el `username` o el `email`.

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Juan Paredes",
    "username": "juanparedes",
    "email": "juan@unet.edu.ve",
    "avatar": "",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error 401:**
```json
{
  "success": false,
  "message": "Correo/usuario o contraseña incorrectos"
}
```

---

### GET /auth/profile `AUTH`
Retorna el perfil del usuario autenticado.

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Juan Paredes",
    "username": "juanparedes",
    "email": "juan@unet.edu.ve",
    "avatar": "https://ejemplo.com/avatar.jpg",
    "career": "Ing. Informática",
    "identityCard": "31357791",
    "role": "user"
  }
}
```

---

### PUT /auth/profile `AUTH`
Actualiza los datos del perfil. Todos los campos son opcionales.

**Body:**
```json
{
  "name": "Juan A. Paredes",
  "career": "Ing. Informática",
  "identityCard": "31357791",
  "avatar": "https://ejemplo.com/nuevo-avatar.jpg",
  "password": "nuevacontrasena123"
}
```

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Juan A. Paredes",
    "username": "juanparedes",
    "email": "juan@unet.edu.ve",
    "avatar": "https://ejemplo.com/nuevo-avatar.jpg",
    "career": "Ing. Informática",
    "identityCard": "31357791",
    "role": "user"
  }
}
```

---

## Emprendimientos — `/api/emprendimientos`

### GET /emprendimientos
Lista todos los emprendimientos. Soporta filtros por query string.

**Query params (opcionales):**
- `category=Comida`
- `search=pasteles`

**Ejemplo:** `GET /api/emprendimientos?category=Comida&search=archi`

**Response 200:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c01",
      "title": "ArquiPasteles",
      "category": "Comida",
      "description": "Pasteles artesanales hechos por estudiantes de arquitectura.",
      "location": "Hall del Bloque B",
      "schedule": "Lunes a Viernes 8:00 AM - 6:00 PM",
      "socialLinks": {
        "whatsapp": "+58 414-1234567",
        "instagram": "@arquipasteles",
        "email": "arquipasteles@gmail.com"
      },
      "profileImage": "https://ejemplo.com/logo.jpg",
      "coverImage": "https://ejemplo.com/portada.jpg",
      "followers": ["664f1a2b3c4d5e6f7a8b9c0d"],
      "followersCount": 1,
      "status": "active",
      "owner": {
        "_id": "664f1a2b3c4d5e6f7a8b9c0d",
        "name": "Juan Paredes",
        "username": "juanparedes",
        "avatar": ""
      },
      "createdAt": "2026-04-07T12:00:00.000Z"
    }
  ]
}
```

---

### POST /emprendimientos `AUTH`
Crea un nuevo emprendimiento.

**Body:**
```json
{
  "title": "ArquiPasteles",
  "category": "Comida",
  "description": "Pasteles artesanales hechos por estudiantes de arquitectura.",
  "location": "Hall del Bloque B",
  "schedule": "Lunes a Viernes 8:00 AM - 6:00 PM",
  "socialLinks": {
    "whatsapp": "+58 414-1234567",
    "instagram": "@arquipasteles",
    "email": "arquipasteles@gmail.com"
  },
  "profileImage": "https://ejemplo.com/logo.jpg",
  "coverImage": "https://ejemplo.com/portada.jpg"
}
```
> `title`, `category` y `location` son requeridos.

**Response 201:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c01",
    "title": "ArquiPasteles",
    "category": "Comida",
    "description": "Pasteles artesanales hechos por estudiantes de arquitectura.",
    "location": "Hall del Bloque B",
    "schedule": "Lunes a Viernes 8:00 AM - 6:00 PM",
    "socialLinks": {
      "whatsapp": "+58 414-1234567",
      "instagram": "@arquipasteles",
      "email": "arquipasteles@gmail.com"
    },
    "profileImage": "https://ejemplo.com/logo.jpg",
    "coverImage": "https://ejemplo.com/portada.jpg",
    "followers": [],
    "followersCount": 0,
    "status": "active",
    "owner": "664f1a2b3c4d5e6f7a8b9c0d",
    "createdAt": "2026-04-07T12:00:00.000Z"
  }
}
```

---

### GET /emprendimientos/mine `AUTH`
Retorna todos los emprendimientos del usuario autenticado.

**Response 200:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c01",
      "title": "ArquiPasteles",
      "category": "Comida",
      "location": "Hall del Bloque B",
      "followers": [],
      "followersCount": 0,
      "status": "active",
      "owner": "664f1a2b3c4d5e6f7a8b9c0d",
      "createdAt": "2026-04-07T12:00:00.000Z"
    }
  ]
}
```

---

### GET /emprendimientos/:id
Retorna un emprendimiento por su ID.

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c01",
    "title": "ArquiPasteles",
    "category": "Comida",
    "description": "Pasteles artesanales hechos por estudiantes de arquitectura.",
    "location": "Hall del Bloque B",
    "schedule": "Lunes a Viernes 8:00 AM - 6:00 PM",
    "socialLinks": {
      "whatsapp": "+58 414-1234567",
      "instagram": "@arquipasteles",
      "email": "arquipasteles@gmail.com"
    },
    "profileImage": "https://ejemplo.com/logo.jpg",
    "coverImage": "https://ejemplo.com/portada.jpg",
    "followers": [],
    "followersCount": 0,
    "status": "active",
    "owner": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    },
    "createdAt": "2026-04-07T12:00:00.000Z"
  }
}
```

**Error 404:**
```json
{
  "success": false,
  "message": "Emprendimiento no encontrado"
}
```

---

### PUT /emprendimientos/:id `AUTH`
Actualiza un emprendimiento. Solo el dueño puede hacerlo. Todos los campos son opcionales.

**Body:**
```json
{
  "description": "Nueva descripción actualizada.",
  "schedule": "Lunes a Sábado 9:00 AM - 5:00 PM",
  "socialLinks": {
    "whatsapp": "+58 424-9876543"
  }
}
```

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c01",
    "title": "ArquiPasteles",
    "description": "Nueva descripción actualizada.",
    "schedule": "Lunes a Sábado 9:00 AM - 5:00 PM",
    "owner": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    }
  }
}
```

**Error 403:**
```json
{
  "success": false,
  "message": "No tienes permiso para editar este emprendimiento"
}
```

---

### DELETE /emprendimientos/:id `AUTH`
Elimina un emprendimiento. Solo el dueño puede hacerlo.

**Response 200:**
```json
{
  "success": true,
  "message": "Emprendimiento eliminado"
}
```

---

### POST /emprendimientos/:id/follow `AUTH`
Alterna entre seguir y dejar de seguir un emprendimiento.

**Body:** *(vacío)*

**Response — al seguir:**
```json
{
  "success": true,
  "following": true,
  "followersCount": 128
}
```

**Response — al dejar de seguir:**
```json
{
  "success": true,
  "following": false,
  "followersCount": 127
}
```

**Error 400** (dueño intenta seguir su propio emprendimiento):
```json
{
  "success": false,
  "message": "No puedes seguir tu propio emprendimiento"
}
```

---

### GET /emprendimientos/:id/publicaciones
Lista todas las publicaciones de un emprendimiento.

**Response 200:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c10",
      "title": "Prototipado de Placas V2.0",
      "content": "Nuevo lote disponible esta semana 🎉",
      "image": "https://ejemplo.com/post1.jpg",
      "likes": [],
      "likesCount": 0,
      "emprendimiento": "664f1a2b3c4d5e6f7a8b9c01",
      "author": {
        "_id": "664f1a2b3c4d5e6f7a8b9c0d",
        "name": "Juan Paredes",
        "username": "juanparedes",
        "avatar": ""
      },
      "createdAt": "2026-04-07T14:00:00.000Z"
    }
  ]
}
```

---

### POST /emprendimientos/:id/publicaciones `AUTH`
Crea una publicación en el emprendimiento. Solo el dueño puede publicar.

**Body:**
```json
{
  "title": "Prototipado de Placas V2.0",
  "content": "Nuevo lote disponible esta semana 🎉",
  "image": "https://ejemplo.com/post1.jpg"
}
```
> `title` e `image` son requeridos.

**Response 201:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c10",
    "title": "Prototipado de Placas V2.0",
    "content": "Nuevo lote disponible esta semana 🎉",
    "image": "https://ejemplo.com/post1.jpg",
    "likes": [],
    "likesCount": 0,
    "emprendimiento": "664f1a2b3c4d5e6f7a8b9c01",
    "author": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    },
    "createdAt": "2026-04-07T14:00:00.000Z"
  }
}
```

**Error 403:**
```json
{
  "success": false,
  "message": "Solo el dueño del emprendimiento puede publicar"
}
```

---

## Eventos — `/api/eventos`

### GET /eventos
Lista todos los eventos ordenados por fecha. Soporta filtros por query string.

**Query params (opcionales):**
- `category=Taller`
- `search=concierto`

**Response 200:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c20",
      "title": "Concierto de Primavera",
      "category": "Concierto",
      "description": "Concierto anual de los estudiantes de música de la UNET.",
      "date": "2026-05-15T00:00:00.000Z",
      "timeRange": "6:00 PM - 10:00 PM",
      "location": "Teatro Principal UNET",
      "coverImage": "https://ejemplo.com/concierto.jpg",
      "attendees": [],
      "attendeesCount": 0,
      "organizer": {
        "_id": "664f1a2b3c4d5e6f7a8b9c0d",
        "name": "Juan Paredes",
        "username": "juanparedes",
        "avatar": ""
      },
      "createdAt": "2026-04-07T12:00:00.000Z"
    }
  ]
}
```

---

### POST /eventos `AUTH`
Crea un nuevo evento.

**Body:**
```json
{
  "title": "Concierto de Primavera",
  "category": "Concierto",
  "description": "Concierto anual de los estudiantes de música de la UNET.",
  "date": "2026-05-15",
  "timeRange": "6:00 PM - 10:00 PM",
  "location": "Teatro Principal UNET",
  "coverImage": "https://ejemplo.com/concierto.jpg"
}
```
> `title`, `category`, `date` y `location` son requeridos.

**Response 201:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c20",
    "title": "Concierto de Primavera",
    "category": "Concierto",
    "description": "Concierto anual de los estudiantes de música de la UNET.",
    "date": "2026-05-15T00:00:00.000Z",
    "timeRange": "6:00 PM - 10:00 PM",
    "location": "Teatro Principal UNET",
    "coverImage": "https://ejemplo.com/concierto.jpg",
    "attendees": [],
    "attendeesCount": 0,
    "organizer": "664f1a2b3c4d5e6f7a8b9c0d",
    "createdAt": "2026-04-07T12:00:00.000Z"
  }
}
```

---

### GET /eventos/:id
Retorna un evento por su ID. Incluye lista completa de asistentes.

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c20",
    "title": "Concierto de Primavera",
    "category": "Concierto",
    "description": "Concierto anual de los estudiantes de música de la UNET.",
    "date": "2026-05-15T00:00:00.000Z",
    "timeRange": "6:00 PM - 10:00 PM",
    "location": "Teatro Principal UNET",
    "coverImage": "https://ejemplo.com/concierto.jpg",
    "attendees": [
      {
        "_id": "664f1a2b3c4d5e6f7a8b9c0d",
        "name": "Juan Paredes",
        "username": "juanparedes",
        "avatar": ""
      }
    ],
    "attendeesCount": 1,
    "organizer": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    },
    "createdAt": "2026-04-07T12:00:00.000Z"
  }
}
```

---

### PUT /eventos/:id `AUTH`
Actualiza un evento. Solo el organizador puede hacerlo.

**Body:**
```json
{
  "timeRange": "7:00 PM - 11:00 PM",
  "location": "Auditorio Central UNET"
}
```

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c20",
    "title": "Concierto de Primavera",
    "timeRange": "7:00 PM - 11:00 PM",
    "location": "Auditorio Central UNET",
    "organizer": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    }
  }
}
```

---

### DELETE /eventos/:id `AUTH`
Elimina un evento. Solo el organizador puede hacerlo.

**Response 200:**
```json
{
  "success": true,
  "message": "Evento eliminado"
}
```

---

### POST /eventos/:id/attend `AUTH`
Alterna entre asistir y no asistir a un evento.

**Body:** *(vacío)*

**Response — al apuntarse:**
```json
{
  "success": true,
  "attending": true,
  "attendeesCount": 42
}
```

**Response — al desapuntarse:**
```json
{
  "success": true,
  "attending": false,
  "attendeesCount": 41
}
```

---

### GET /eventos/:id/muro
Lista los comentarios del muro del evento.

**Response 200:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c30",
      "content": "Genial, no me lo pierdo!",
      "author": {
        "_id": "664f1a2b3c4d5e6f7a8b9c0d",
        "name": "Juan Paredes",
        "username": "juanparedes",
        "avatar": ""
      },
      "evento": "664f1a2b3c4d5e6f7a8b9c20",
      "likes": [],
      "likesCount": 0,
      "createdAt": "2026-04-07T15:00:00.000Z"
    }
  ]
}
```

---

### POST /eventos/:id/muro `AUTH`
Agrega un comentario al muro del evento. Solo los asistentes (o el organizador) pueden comentar.

**Body:**
```json
{
  "content": "Genial, no me lo pierdo!"
}
```

**Response 201:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c30",
    "content": "Genial, no me lo pierdo!",
    "author": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    },
    "evento": "664f1a2b3c4d5e6f7a8b9c20",
    "likes": [],
    "likesCount": 0,
    "createdAt": "2026-04-07T15:00:00.000Z"
  }
}
```

**Error 403:**
```json
{
  "success": false,
  "message": "Solo los asistentes al evento pueden comentar en el muro"
}
```

---

## Publicaciones — `/api/publicaciones`

### GET /publicaciones/:id
Retorna una publicación por su ID.

**Response 200:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c10",
    "title": "Prototipado de Placas V2.0",
    "content": "Nuevo lote disponible esta semana 🎉",
    "image": "https://ejemplo.com/post1.jpg",
    "likes": [],
    "likesCount": 0,
    "emprendimiento": {
      "_id": "664f1a2b3c4d5e6f7a8b9c01",
      "title": "ArquiPasteles",
      "profileImage": "https://ejemplo.com/logo.jpg"
    },
    "author": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    },
    "createdAt": "2026-04-07T14:00:00.000Z"
  }
}
```

---

### DELETE /publicaciones/:id `AUTH`
Elimina una publicación. Solo el autor puede hacerlo.

**Response 200:**
```json
{
  "success": true,
  "message": "Publicacion eliminada"
}
```

---

### POST /publicaciones/:id/like `AUTH`
Alterna entre dar y quitar like a una publicación.

**Body:** *(vacío)*

**Response — al dar like:**
```json
{
  "success": true,
  "liked": true,
  "likesCount": 134
}
```

**Response — al quitar like:**
```json
{
  "success": true,
  "liked": false,
  "likesCount": 133
}
```

---

### GET /publicaciones/:id/comentarios
Lista los comentarios de una publicación.

**Response 200:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c40",
      "content": "Qué buena pinta tienen esas placas!",
      "author": {
        "_id": "664f1a2b3c4d5e6f7a8b9c0d",
        "name": "Juan Paredes",
        "username": "juanparedes",
        "avatar": ""
      },
      "publicacion": "664f1a2b3c4d5e6f7a8b9c10",
      "likes": [],
      "likesCount": 0,
      "createdAt": "2026-04-07T16:00:00.000Z"
    }
  ]
}
```

---

### POST /publicaciones/:id/comentarios `AUTH`
Agrega un comentario a una publicación.

**Body:**
```json
{
  "content": "Qué buena pinta tienen esas placas!"
}
```

**Response 201:**
```json
{
  "success": true,
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c40",
    "content": "Qué buena pinta tienen esas placas!",
    "author": {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Juan Paredes",
      "username": "juanparedes",
      "avatar": ""
    },
    "publicacion": "664f1a2b3c4d5e6f7a8b9c10",
    "likes": [],
    "likesCount": 0,
    "createdAt": "2026-04-07T16:00:00.000Z"
  }
}
```

---

## Respuestas de error comunes

| Status | Significado |
|--------|-------------|
| 400 | Datos inválidos o faltantes |
| 401 | No autenticado (token ausente o inválido) |
| 403 | Autenticado pero sin permiso |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

**Formato general de error:**
```json
{
  "success": false,
  "message": "Descripción del error"
}
```
