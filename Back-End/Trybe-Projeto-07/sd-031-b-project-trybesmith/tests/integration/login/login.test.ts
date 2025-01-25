import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import loginMock from '../../mocks/loginMock';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 and log successfully', async function () {
    sinon.stub(UserModel, 'findOne').resolves(loginMock);

    const username = 'Coala';
    const password = '123456';
    const res = await chai.request(app).post('/login').send({ username, password });

    expect(res.body).to.be.an('object');
  });
  it('should return 401 and not log successfully', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const username = 'Coala';
    const password = '1234567';
    const res = await chai.request(app).post('/login').send({ username, password });

    expect(res.status).to.be.equal(401);
    expect(res.body).to.be.an('object');

  });
});
