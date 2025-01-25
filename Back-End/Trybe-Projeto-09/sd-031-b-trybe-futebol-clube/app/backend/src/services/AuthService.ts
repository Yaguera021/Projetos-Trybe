import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UsersModel';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IToken } from '../Interfaces/IToken';
import { IJwt } from '../utils/jwt/JWT';
import JsonWebTokenAdapter from '../utils/jwt/JsonWebTokenAdapter';

export default class AuthService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService: IJwt = new JsonWebTokenAdapter(),
  ) { }

  async login(email: string, password: string): Promise<ServiceResponse<IToken>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return {
        status: 'UNAUTHORIZED',
        data: {
          message: 'Invalid email or password' } };
    }

    const token = this.jwtService.sign({
      id: user.id,
    });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
