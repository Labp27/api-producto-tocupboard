# ToCupboard API

Este repositorio contiene la API para el proyecto ToCupboard, una plataforma e-commerce que conecta consumidores con pequeños comerciantes locales.

## Descripción

La API de ToCupboard está desarrollada en Node.js con Express y está diseñada para ser desplegada en Vercel. Proporciona información sobre los productos ofrecidos por los comerciantes locales.

## Instalación

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Crea un archivo `.env` basado en `.env.example` y configura las variables de entorno
4. Ejecuta el servidor de desarrollo con `npm run dev`

## Uso

La API tiene los siguientes endpoints:

- `GET /api/products`: Retorna todos los productos
- `GET /api/products/:id`: Retorna un producto específico por ID

Ejemplo de respuesta JSON:

```json
{
  "id": "1",
  "name": "Mermelada Artesanal",
  "description": "Mermelada de frutos rojos hecha a mano por productores locales",
  "price": 8.99,
  "stock": 50,
  "seller": {
    "name": "Frutas del Bosque",
    "location": "Valle Verde"
  }
}
```

## Despliegue

Para desplegar en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno en Vercel
3. Despliega con `vercel --prod`

## Contribución

Si deseas contribuir al proyecto, por favor crea un fork del repositorio y envía un pull request con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT.
