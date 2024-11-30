import { Router, Request, Response, NextFunction } from 'express';
import { addVideo, deleteVideo, getCertificate } from '../controllers/videoController';

const router = Router();

// Adicionar um novo vídeo (Qualquer pessoa pode adicionar um vídeo, sem autenticação)
router.post('/', (req: Request, res: Response, next: NextFunction) => {
  addVideo(req, res, next).catch(next);
});

// Remover um vídeo (Qualquer pessoa pode remover um vídeo, sem autenticação)
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  deleteVideo(req, res, next).catch(next);
});

// Gerar certificado (Qualquer pessoa pode gerar um certificado, sem autenticação)
router.get('/certificate/:userId', (req: Request, res: Response, next: NextFunction) => {
  getCertificate(req, res, next).catch(next);
});

export default router;
