import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUniqueUser } from '@/repositories/userRepository';

export const checkPassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

export const checkUser = (email) => findUniqueUser(email);

export const generateToken = (data) => jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

export const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET_KEY);
