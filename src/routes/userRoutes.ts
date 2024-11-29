import { Router, Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = Router();

// Usar as funções de controle com os tipos adequados e capturar erros
router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  registerUser(req, res, next).catch(next); // Captura erros assíncronos
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  loginUser(req, res, next).catch(next); // Captura erros assíncronos
});

export default router;
