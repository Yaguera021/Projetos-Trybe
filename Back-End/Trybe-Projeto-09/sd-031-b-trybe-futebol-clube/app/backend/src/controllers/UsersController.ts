import { Request, Response } from 'express';
import UserService from '../services/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import AuthService from '../services/AuthService';

export default class UserController {
  constructor(
    private userService = new UserService(),
    private authService = new AuthService(),
    private role = '',
  ) { }

  public async getUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.findAll();
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getUserById(req: Request, res: Response) {
    const serviceResponse = await this.userService.findById(Number(req.params.id));
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  public async getByRole(req: Request, res: Response) {
    const { user } = res.locals;
    const serviceResponse = await this.userService.findRoleById(user.id);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const serviceResponse = await this.authService.login(email, password);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
