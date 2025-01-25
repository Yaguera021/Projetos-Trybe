import SequelizeUser from '../database/models/SequelelizeUser';
import { IUser } from '../Interfaces/Users/IUser';
import { IUserModel } from '../Interfaces/Users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll(): Promise<IUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, email, password, username, role }) => (
      { id, email, password, username, role }
    ));
  }

  async findById(id: IUser['id']): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    const { email, password, username, role } = user;
    return { id, email, password, username, role };
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    return user.toJSON();
  }

  async getUserRole(id: IUser['id']): Promise<IUser['role'] | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    return user.role;
  }
}
