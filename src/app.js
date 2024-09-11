import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'; // Importa fileURLToPath desde 'url'
import contactRoutes from './routes/contactRoutes.js'; // Importamos las rutas de contacto

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors()); // Habilita CORS para permitir solicitudes entre dominios
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Analiza las solicitudes entrantes con payload en JSON

// Servir archivos estáticos desde la carpeta 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api/contact', contactRoutes); // Define las rutas de contacto

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
