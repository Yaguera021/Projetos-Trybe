const sinon = require('sinon');
const chai = require('chai');
const { salesServices } = require('../../../src/services');
const { salesMockSuccess, salesById, salesMock } = require('../mocks/sales.mock');
const { salesByIdController, allSalesController, salesCreateController, salesDeleteController } = require('../../../src/controllers/sales.controller');

const { expect } = chai;

describe('Controller of Sales', function () {
  it('Should return a list of sales', async function () {
    sinon.stub(salesServices, 'allSales').resolves({ status: 'SUCCESSFUL', data: salesMock });

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await allSalesController(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock);
  });
  
  it('Should return sales by id', async function () {
    sinon.stub(salesServices, 'salesById').resolves({ status: 'SUCCESSFUL', data: salesById });

    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesByIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesById);
  });

  it('Should add a new sale', async function () {
    sinon.stub(salesServices, 'salesCreate').resolves({ status: 'CREATED', data: salesMockSuccess });

    const req = {
      body: salesMockSuccess,
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesCreateController(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesMockSuccess);
  });

  it('Should delete a sale', async function () {
    sinon.stub(salesServices, 'salesDelete').resolves({ status: 'DELETED', data: null });

    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesDeleteController(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});