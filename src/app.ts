import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware para parsear JSON no corpo da requisição
app.use(express.json());

// Usar as rotas de usuários
app.use('/api/users', userRoutes);

// Middleware de tratamento de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

const PORT = process.env.PORT || 3000; // Alterado para 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
