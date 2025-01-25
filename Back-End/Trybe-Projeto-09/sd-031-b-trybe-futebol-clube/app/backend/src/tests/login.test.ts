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

describe('Tests of Login', () => {
  it('Should return error when email is not found', async function () {
    sinon.stub(SequelizeUsers, 'findOne').resolves(null);
    sinon.stub(LoginValidations, 'validateLogin').returns();

    const { status, body } = await chai.request(app).post('/login').send(usersMock.notEmailFound);

    expect(status).to.be.equal(401);
    expect(body).to.have.key('message');
  });

  it('Should return error when email does not exist', async function () {
    const { status, body } = await chai.request(app).post('/login').send(usersMock.invalidUserEmailBody);

    expect(status).to.be.equal(401);
    expect(body).to.have.key('message');
  })

  it('Should return error when password is wrong', async function () {
    const { status, body } = await chai.request(app).post('/login').send(usersMock.invalidUserPasswordBody);

    expect(status).to.be.equal(401);
    expect(body).to.have.key('message');
  });

  it('Should return error with no password', async function () {
    const { status, body } = await chai.request(app).post('/login').send(usersMock.noEmail);

    expect(status).to.be.equal(400);
    expect(body).to.have.key('message');
  });
  
  it('Should return error with no email', async function () {
    const { status, body } = await chai.request(app).post('/login').send(usersMock.noPassword);

    expect(status).to.be.equal(400);
    expect(body).to.have.key('message');
  });

  afterEach(sinon.restore);
});