import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Database } from './database/Database.js';
import productRoutes from './routes/productRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

// *IMPORTANTE*: Necesitas llamar a dotenv.config() aquí
dotenv.config();

const app = express();

// Inicializar Singleton DB
const db = Database.getInstance();
db.connect(); // Esto se conecta a Atlas en la nube

app.use(cors());
app.use(express.json());

// Tus rutas de API (Express)
app.use('/api/products', productRoutes);
app.use('/api/clients', clientRoutes);

// *Ruta de Prueba* (Para confirmar que Express está funcionando)
app.get('/', (req, res) => {
    res.send('API Root Reached');
});

// *CLAVE*: NO USAR app.listen(). Solo la exportación por defecto.
export default app;