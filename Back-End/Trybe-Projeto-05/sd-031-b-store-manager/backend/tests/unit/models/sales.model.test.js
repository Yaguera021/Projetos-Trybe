const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models'); 
const { addSalesMock } = require('../mocks/sales.mock');

const { expect } = chai;

describe('Model of Sales', function () {
  it('Should return a list of sales', async function () {
    sinon.stub(connection, 'execute').resolves([addSalesMock]);
    const sales = await salesModel.getAllSales();
    expect(sales).to.be.an('array');
  });

  it('Should return a sale by ID', async function () {
    const saleId = 1; 
    sinon.stub(connection, 'execute').resolves([addSalesMock]); 
    const sale = await salesModel.getSalesById(saleId);
    expect(sale).to.be.an('array');
  });

  it('Should delete a sale by ID', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const sale = await salesModel.deleteSale(1);

    expect(sale.affectedRows).to.be.deep.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});
