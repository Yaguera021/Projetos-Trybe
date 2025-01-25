import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeUsers from '../database/models/SequelelizeUser';
import teamsMock from './mocks/teamsMock';
import matchesMock from './mocks/matchesMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests of MATCHES', function() {

  it('Should list all matches ', async function () {
    sinon.stub(SequelizeUsers, 'findAll').resolves(matchesMock.mockMatches as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });

  it('Should list all finished ', async function () {
    sinon.stub(SequelizeUsers, 'findAll').resolves(matchesMock.mockMatches as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=false');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });

  it('Should list inProgress matches', async function () {
    sinon.stub(SequelizeUsers, 'findAll').resolves(matchesMock.mockMatches as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });
  it('Should display error for matches not found ', async function () {
    sinon.stub(SequelizeUsers, 'findAll').resolves(matchesMock.mockMatches as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });
  afterEach(sinon.restore);
});