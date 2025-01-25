import { GetUserRole, IUser, IUserResponse } from '../Interfaces/Users/IUser';
import UserModel from '../models/UsersModel';
import { IUserModel } from '../Interfaces/Users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async findAll(): Promise<ServiceResponse<IUserResponse[]>> {
    const allUsers = await this.userModel.findAll();
    const usersReturn = allUsers.map(({ id, username, role, email }) =>
      ({ id, username, role, email }));
    return { status: 'SUCCESSFUL', data: usersReturn };
  }

  public async findById(id: number): Promise<ServiceResponse<IUserResponse | GetUserRole>> {
    const user = await this.userModel.findById(id);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const { username, email, role } = user as IUser;

    return { status: 'SUCCESSFUL', data: { id, username, role, email } };
  }

  public async findRoleById(id: number): Promise<ServiceResponse<GetUserRole>> {
    const userId = await this.userModel.findById(id);
    if (!userId) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const { role } = userId;

    return { status: 'SUCCESSFUL', data: { role } };
  }
}
