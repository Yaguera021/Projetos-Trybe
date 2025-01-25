const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const { expect } = chai;
const { mockProducts } = require('../mocks');
const { productServices } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

chai.use(sinonChai);

describe('Controller of Products', function () {
  it('Should return a list of products', async function () {
    sinon
      .stub(productServices, 'getAll')
      .resolves(mockProducts.allProductsFromServiceSuccessful);

    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' },
    ]);
  });

  it('Should return a product by id', async function () {
    sinon.stub(productServices, 'findById').resolves(mockProducts.productFromModelSucessful);

    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.getById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.productFromModel);
  });

  it('Should add a product', async function () {
    sinon.stub(productServices, 'addProduct').resolves(mockProducts.productFromModelSucessful);
    const req = { body: { name: 'Martelo de Thor' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.addProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.productFromModel);
  });

  it('Should update a product', async function () {
    sinon.stub(productServices, 'updateProduct').resolves(mockProducts.productFromModelSucessful);
    const req = { body: { name: 'Martelo de Thor' }, params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.updateProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.productFromModel);
  });

  it('Should delete a product', async function () {
    sinon.stub(productServices, 'deleteProduct').resolves(mockProducts.productFromModelSucessful);
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.productFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});
