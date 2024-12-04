// backend/index.ts
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'; // Importando o cors
import router from './routes/userRoutes';
import videoRoutes from './routes/videoRoutes'; // Corrigido o caminho

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Habilitando CORS para permitir requisições do frontend
app.use(express.json()); // Middleware para parsing de JSON

// Conectar ao banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Usar as rotas definidas no router
app.use('/', router); // Rotas de usuário
app.use('/api/videos', videoRoutes);  // Registrar as rotas de vídeos

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
