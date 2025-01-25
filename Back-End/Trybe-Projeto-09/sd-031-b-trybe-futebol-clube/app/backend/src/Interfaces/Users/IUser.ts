import { Identifiable } from '..';

// usuário existente para login
export interface ILogin {
  email: string;
  password: string;
}

// usuário completo
export interface IUser extends Identifiable, ILogin {
  id: number;
  username: string;
  role: string;
}

// usuário a ser retornado pela API
export type IUserResponse = Omit<IUser, 'password'>;

export type GetUserRole = {
  role: string;
};
