const chai = require('chai');
// const sinonChai = require('sinon-chai');
const sinon = require('sinon');

const { expect } = chai;
const mockProducts = require('../mocks');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');

describe('Model of Products', function () {
  const { productFromDB, allProductsFromDB } = mockProducts.mockProducts;

  it('Should return a list of products', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsFromDB]);
    const products = await productsModel.getAll();
    expect(products).to.be.an('array');
    expect(products[0]).to.be.an('object');
    expect(products).to.be.equal(allProductsFromDB);
  });

  it('Should return a product by ID', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromDB]]);
    const product = await productsModel.getById(1);
    expect(product).to.be.an('object');
    expect(product).to.be.equal(productFromDB);
  });

  it('Should test addProduct function from model', async function () {
    const productName = 'Product Test';
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const insertId = await productsModel.addProduct(productName);
    expect(insertId).to.be.a('number');
  });

  it('Should test updateProduct function from model', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromDB]]);
    const product = await productsModel.updateProduct(1, 'Product Test');
    expect(product).to.be.an('object');
    expect(product).to.be.equal(productFromDB);
  });

  it('Should delete a product by ID', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const product = await productsModel.deleteProduct(1);

    expect(product.affectedRows).to.be.deep.equal(1);
  });

  afterEach(function () {
    sinon.restore();  
    });  
});