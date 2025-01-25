import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeTeam from '../database/models/SequelizeTeam';
import teamsMock from './mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Tests of TEAMS', function() {

  it('Should list all teams on table', async function () {
    sinon.stub(SequelizeTeam, 'findAll').resolves(teamsMock.mockTeams as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teamsMock.mockTeams);
  });

  it('Should list one team on table', async function () {
    sinon.stub(SequelizeTeam, 'findOne').resolves(teamsMock.mockTeam as any);

    const { status, body } = await chai.request(app).get('/teams/14');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teamsMock.mockTeam);
  });

  it('Should return not found if team does not exist on table', async function () {
    sinon.stub(SequelizeTeam, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/teams/51');
    
    expect(status).to.be.equal(404);
    expect(body).to.be.deep.equal({ message: 'Team 51 not found' });
  });

  it('Should return one team by Id', async function () {
    sinon.stub(SequelizeTeam, 'findOne').resolves(teamsMock.mockTeam as any);

    const { status, body } = await chai.request(app).get('/teams/14');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teamsMock.mockTeam);
  });
  afterEach(sinon.restore);
});