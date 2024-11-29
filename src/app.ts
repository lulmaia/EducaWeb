import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/userRoutes';  // Verifique o caminho para o seu arquivo de rotas

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsing de JSON

// Conectar ao banco de dados MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Usar as rotas definidas no router
app.use('/', router); // Aqui é onde você registra as rotas

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
