import { NextFunction, Request, Response } from 'express';
import JsonWebTokenAdapter from '../utils/jwt/JsonWebTokenAdapter';

const jwtService = new JsonWebTokenAdapter();

export default function TokenValidation(req: Request, res: Response, next: NextFunction):
Response | void {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const [, token] = auth.split(' ');
  if (!token) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  try {
    const decoded = jwtService.verify(token);
    res.locals.user = decoded;
    return next();
  } catch {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
