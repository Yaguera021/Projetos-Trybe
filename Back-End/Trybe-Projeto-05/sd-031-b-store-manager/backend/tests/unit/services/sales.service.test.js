const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const { salesServices } = require('../../../src/services');
const { mockSales } = require('../mocks');

describe('Service of Sales', function () {
  it('Should return a list of sales', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(mockSales.salesMock);

    const sales = await salesServices.allSales();

    expect(sales.status).to.be.equal('SUCCESSFUL');
    expect(sales.data).to.be.deep.equal(mockSales.salesMock);
  });

  it('Should return a sale by id', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(mockSales.salesById);

    const sale = await salesServices.salesById(2);

    expect(sale.status).to.be.equal('SUCCESSFUL');
    expect(sale.data).to.be.deep.equal(mockSales.salesById);
  });

  it('Should return an error when sale is not found', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(mockSales.salesNotFound);

    const sale = await salesServices.salesById(2);

    expect(sale.status).to.be.equal('NOT_FOUND');
    expect(sale.data.message).to.be.equal('Sale not found');
  });

  it('Should delete a sale', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(mockSales.salesById);
    sinon.stub(salesModel, 'deleteSale').resolves();

    const sale = await salesServices.salesDelete(2);

    expect(sale.status).to.be.equal('DELETED');
    expect(sale.data).to.be.equal(null);
  });

  it('Should create a sale', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(mockSales.salesById);
    sinon.stub(salesModel, 'createSale').resolves(3);

    const sale = await salesServices.salesCreate(mockSales.salesMock);

    expect(sale.status).to.be.equal('CREATED');
    expect(sale.data.id).to.be.equal(3);
  });

  afterEach(function () {
    sinon.restore();
  });
});