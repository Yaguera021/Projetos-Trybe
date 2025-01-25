import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt.util';
import UserModel from '../database/models/user.model';
import { LogUser } from '../types/LogUser';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';

async function login(user: LogUser): Promise<ServiceResponse<Token>> {
  const getUser = await UserModel.findOne({ where: { username: user.username } });
  if (!getUser || !bcrypt.compareSync(user.password, getUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { username, password } = getUser.dataValues;
  const token = jwt.sign(
    { username, password },
  );
  return { status: 'SUCCESSFUL', data: { token } };
}

export default { login };