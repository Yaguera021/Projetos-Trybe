const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const mockProducts = require('../mocks');
const { productsModel } = require('../../../src/models');
const { productServices } = require('../../../src/services');

describe('Service of Products', function () {
  it('Should return a list of products', async function () {
    sinon
      .stub(productsModel, 'getAll')
      .resolves(mockProducts.allProductsFromDB);

    const products = await productServices.getAll();

    expect(products.status).to.be.equal('SUCCESSFUL');
    expect(products.data).to.be.deep.equal(mockProducts.allProductsFromDB);
  });

  it('Should return an error when product is not found', async function () {
    sinon.stub(productsModel, 'getById').resolves(mockProducts.productNotFound);

    const product = await productServices.findById(1);

    expect(product.status).to.be.equal('NOT_FOUND');
    expect(product.data.message).to.be.equal('Product not found');
  });

  it('Should return SUCCESSFUL message ', async function () {
    sinon.stub(productsModel, 'getById').resolves(mockProducts.mockProducts.productFromModel);

    const product = await productServices.findById(1);

    expect(product.status).to.be.equal('SUCCESSFUL');
  });

  it('Should return CREATED message', async function () {
    sinon.stub(productsModel, 'addProduct').resolves(mockProducts.mockProducts.productFromModel);
    sinon.stub(productsModel, 'getById').resolves(mockProducts.mockProducts.productFromModel);

    const product = await productServices.addProduct('Product');

    expect(product.status).to.be.equal('CREATED');
  });

  it('Should not delete sold out product', async function () {
    sinon.stub(productsModel, 'getById').resolves(undefined);

    const product = await productServices.deleteProduct(21);

    expect(product.status).to.be.equal('NOT_FOUND');
    expect(product.data.message).to.be.equal('Product not found');
  });

  it('Should update product', async function () {
    sinon.stub(productsModel, 'getById').resolves(mockProducts.mockProducts.productFromModel);
    sinon.stub(productsModel, 'updateProduct').resolves(mockProducts.mockProducts.productFromModel);

    const product = await productServices.updateProduct(1, 'Product');

    expect(product.status).to.be.equal('SUCCESSFUL');
  });

  it('Should return DELETED message', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves(mockProducts.mockProducts.productDeleted);

    const product = await productServices.deleteProduct(1);

    expect(product.status).to.be.equal('DELETED');
  });

  // verificar o que está sendo testado nesse it abaixo! 
  // it('Should check if product exists', async function () {
  //   sinon.stub(productsModel, 'getById').resolves(mockProducts.mockProducts.productFromModel);

  //   const product = await productServices.findById(1);

  //   expect(product.status).to.be.equal('SUCCESSFUL');
  // });

  afterEach(function () {
    sinon.restore();
  });
});
