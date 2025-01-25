import { NextFunction, Request, Response } from 'express';
import JsonWebTokenAdapter from '../utils/jwt/JsonWebTokenAdapter';
import { IJwt } from '../utils/jwt/JWT';

export default class LoginValidation {
  static jwt: IJwt = new JsonWebTokenAdapter();

  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const [, token] = authorization.split(' ');
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const decoded = LoginValidation.jwt.verify(token);
      res.locals.user = decoded;
      return next();
    } catch (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  }
}
