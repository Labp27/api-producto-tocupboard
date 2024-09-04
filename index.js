// Archivo: server.js

import express from "express";
import "dotenv/config.js";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json({ limit: '10kb' })); // Limita el tamaño del body para prevenir ataques de negación de servicio

// CORS configuración 
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

const port = process.env.PORT || 8088;

// Datos de productos (simulando una base de datos)
const productos = [
  {
    "id": "1",
    "nombre": "Mermelada Artesanal",
    "descripcion": "Mermelada de frutos rojos hecha a mano",
    "precio": 8.99,
    "vendedor": "Frutas del Bosque"
  },
  {
    "id": "2",
    "nombre": "Jabón Natural",
    "descripcion": "Jabón orgánico de lavanda y romero",
    "precio": 5.99,
    "vendedor": "Eco Belleza"
  },
  {
    "id": "3",
    "nombre": "Miel Cruda",
    "descripcion": "Miel pura sin procesar de apicultores locales",
    "precio": 12.99,
    "vendedor": "Colmena Feliz"
  }
];

app.get("/", async function (req, res) {
  return res.json("Servicio de productos - ToCupboard");
});

function getProducto(id) {
  return productos.find(producto => producto.id === id);
}

app.get("/producto/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const producto = getProducto(id);

    if (producto) {
      return res.status(200).json({ resp: true, data: producto });
    } else {
      return res.status(404).json({ resp: false, mensaje: "Producto no encontrado" });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ resp: false, mensaje: "Error interno del servidor", error: error.message });
  }
});

app.get("/productos", async function (req, res) {
  try {
    return res.status(200).json({ resp: true, data: productos });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ resp: false, mensaje: "Error interno del servidor", error: error.message });
  }
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// MENSAJE DE EJECUCION DE SERVICIO
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});

// Para testing
export { app };