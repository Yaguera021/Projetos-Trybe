import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeUsers from '../database/models/SequelelizeUser';
import usersMock from './mocks/usersMock';
import LoginValidations from '../middlewares/LoginValidation';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests of USERS', () => {
  it('Should return list of users', async function () {
    sinon.stub(SequelizeUsers, 'findOne').resolves(usersMock.admMock as any);

    const { status, body } = await chai.request(app).get('/login/role').set('Authorization' , usersMock.validToken.bearer);

    expect(status).to.be.equal(401);
    expect(body).to.have.key('message');
  });

  it('Should return error when token is no found', async function () {
    const { status, body } = await chai.request(app).get('/login/role');

    expect(status).to.be.equal(401);
    expect(body).to.have.key('message');
  });

  it('Should find one user by id', async function () {
    sinon.stub(SequelizeUsers, 'findOne').resolves(usersMock.allUsersMock as any);
    
    const { status, body } = await chai.request(app).get('/login/role').set('Authorization' , usersMock.validToken.bearer);

    expect(status).to.be.equal(401);
    expect(body).to.be.have.key('message');

  });

  afterEach(sinon.restore);
});