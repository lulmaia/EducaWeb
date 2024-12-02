import { Request, Response, NextFunction } from 'express';
import Video from '../models/videoModel';

// Adicionar um novo vídeo
export const addVideo = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { title, description, url } = req.body;

  try {
    // Criando um novo vídeo com os dados fornecidos
    const video = new Video({
      title,
      description,
      url
    });

    // Salvando o vídeo no banco de dados
    await video.save();
    return res.status(201).json({ message: 'Video added', video });
  } catch (error) {
    next(error);
  }
};

// Remover um vídeo
export const deleteVideo = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { id } = req.params;

  try {
    // Buscando o vídeo pelo ID fornecido
    const video = await Video.findById(id);

    // Se o vídeo não for encontrado, retorna erro
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Excluindo o vídeo
    await video.deleteOne();
    return res.status(200).json({ message: 'Video deleted' });
  } catch (error) {
    next(error);
  }
};

// Gerar certificado para o usuário
export const getCertificate = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { userId } = req.params;

  try {
    // Buscando os vídeos criados pelo usuário especificado
    const videos = await Video.find({ createdBy: userId });

    // Se o usuário não tiver vídeos, retorna erro
    if (videos.length === 0) {
      return res.status(404).json({ message: 'No videos found for this user' });
    }

    // Gerando um certificado simples
    const certificate = {
      userId,
      videoCount: videos.length,
      issuedAt: new Date(),
    };

    return res.status(200).json({ message: 'Certificate generated', certificate });
  } catch (error) {
    next(error);
  }
};
