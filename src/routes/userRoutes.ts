import { Router, Request, Response, NextFunction } from 'express';
import {
  registerUser,
  loginUser,
  requestPasswordReset,
  resetPassword,
  deleteUser
} from '../controllers/userController'; // Certifique-se de que o caminho está correto

const router = Router();

// Rota para registrar um novo usuário
router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  registerUser(req, res, next).catch(next); // Captura erros assíncronos
});

// Rota para login de usuário
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  loginUser(req, res, next).catch(next); // Captura erros assíncronos
});

// Rota para solicitar recuperação de senha
router.post('/request-password-reset', (req: Request, res: Response, next: NextFunction) => {
  requestPasswordReset(req, res, next).catch(next); // Captura erros assíncronos
});

// Rota para redefinir a senha
router.post('/reset-password/:token', (req: Request, res: Response, next: NextFunction) => {
  resetPassword(req, res, next).catch(next); // Captura erros assíncronos
});

// Rota para excluir o usuário
router.delete('/delete/:userId', (req: Request, res: Response, next: NextFunction) => {

  deleteUser(req, res, next).catch(next); // Captura erros assíncronos
});

export default router;
