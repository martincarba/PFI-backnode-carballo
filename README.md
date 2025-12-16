# PFI Backend Node.js – Carballo

Proyecto **Backend Node.js** desarrollado como **Proyecto Final Integrador (PFI)**.  
Incluye autenticación con JWT, conexión a Firebase y API REST con Express.

---

## 📁 Estructura de carpetas

```
PFI-backnode-carballo/
│
├── src/
│   ├── config/
│   │   ├── firebase.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── users.controller.js
│   │   └── products.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── users.routes.js
│   │   └── products.routes.js
│   │
│   ├── services/
│   │   └── firebase.service.js
│   │
│   ├── utils/
│   │   └── jwt.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env.example
├── .env
├── package.json
├── vercel.json
└── README.md
```

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **Express**
- **Firebase (Firestore / Auth)**
- **JWT (JSON Web Token)**
- **dotenv**
- **cors**
- **Vercel** (deploy)

---

## ⚙️ Variables de entorno

```env
PORT=3000

JWT_SECRET=supersecretkey

FIREBASE_API_KEY=xxxxx
FIREBASE_AUTH_DOMAIN=xxxxx.firebaseapp.com
FIREBASE_PROJECT_ID=xxxxx
FIREBASE_STORAGE_BUCKET=xxxxx.appspot.com
FIREBASE_MESSAGING_SENDER_ID=xxxxx
FIREBASE_APP_ID=xxxxx
```

---

## ▶️ Correr el proyecto en local

### 1. Clonar el repositorio
```bash
git clone https://github.com/martincarba/PFI-backnode-carballo.git
cd PFI-backnode-carballo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

O en modo normal:
```bash
npm start
```

El servidor corre por defecto en:
```
http://localhost:3000
```

---

## 🔐 Credenciales de prueba

Para testear la API:

```
Email: test@gmail.com
Password: 123456
```

> ⚠️ Estas credenciales son solo para testing académico.

---

## 📡 Endpoints disponibles

### 🔑 Auth

#### Login
```
POST /api/auth/login
```
Body:
```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

Response:
```json
{
  "token": "JWT_TOKEN"
}
```

---

### 👤 Usuarios (requiere JWT)

Header:
```
Authorization: Bearer JWT_TOKEN
```

#### Obtener todos los usuarios
```
GET /api/users
```

#### Obtener usuario por ID
```
GET /api/users/:id
```

---

### 📦 Productos (requiere JWT)

#### Obtener productos
```
GET /api/products
```

#### Crear producto
```
POST /api/products
```

Body:
```json
{
  "name": "Producto ejemplo",
  "price": 1000,
  "stock": 10
}
```

---

## ☁️ Deploy en Vercel

El proyecto incluye `vercel.json`.  
Para deploy:

```bash
vercel
```

Configurar las variables de entorno desde el panel de Vercel.

---

## ✅ Estado del proyecto

✔ API REST funcional  
✔ Autenticación JWT  
✔ Protección de rutas  
✔ Deploy en Vercel  

---

## 👨‍💻 Autor

**Martín Carballo**  
Proyecto académico – Backend Node.js
