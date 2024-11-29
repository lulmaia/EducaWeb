import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

// Registrar usuário
export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ email, password: hashedPassword });

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return res.status(201).json({ message: 'User registered', token });
  } catch (error) {
    next(error); // Passar o erro para o middleware de erro
  }
};

// Login de usuário
export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { email, password } = req.body;

  try {
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
    next(error); // Passar o erro para o middleware de erro
  }
};
