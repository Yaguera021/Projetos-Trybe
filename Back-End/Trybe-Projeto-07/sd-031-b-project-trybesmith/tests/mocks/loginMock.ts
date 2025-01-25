import UserModel from '../../src/database/models/user.model';

const loginMock = UserModel.build({
  id: 21,
  username: 'Coala',
  vocation: 'Animal',
  level: 999,
  password: '123456',
});

export default loginMock;