import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapSatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  const loginResponse = await loginService.login({ username, password });
  return res.status(mapSatusHTTP(loginResponse.status)).json(loginResponse.data);
}

export default { login };