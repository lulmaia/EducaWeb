import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import User from '../models/userModel';  // Modelo de usuário

// Configuração do transportador de e-mail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // ou outro serviço, se necessário
    auth: {
      user: 'teste@gmail.com',  // Seu endereço de e-mail
      pass: 'teste',            // Sua senha ou senha de aplicativo (se usar Gmail com 2FA)
    },
  });
};


// Registrar usuário
export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return res.status(201).json({ message: 'User registered', token });
  } catch (error) {
    next(error);
  }
};

// Login de usuário
export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    next(error);
  }
};

// Solicitar recuperação de senha
export const requestPasswordReset = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Gerar um token de redefinição de senha
    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hora de expiração
    await user.save();

    const transporter = createTransporter();
    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

    // Enviar e-mail
    await transporter.sendMail({
      to: email,
      subject: 'Password Reset',
      html: `<p>You requested a password reset. Click the link below to reset your password:</p>
             <a href="${resetUrl}">Reset Password</a>`,
    });

    return res.json({ message: 'Password reset email sent' });
  } catch (error) {
    next(error);
  }
};

// Redefinir senha
export const resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    // Procurar o usuário pelo token de reset
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }, // Verificar se o token ainda é válido
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    // Hash da nova senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Atualizar a senha do usuário
    user.password = hashedPassword;
    user.resetPasswordToken = undefined; // Limpar o token de reset
    user.resetPasswordExpires = undefined; // Limpar a data de expiração do token

    await user.save(); // Salvar as mudanças

    return res.json({ message: 'Password has been successfully reset' });
  } catch (error) {
    next(error);
  }
};
