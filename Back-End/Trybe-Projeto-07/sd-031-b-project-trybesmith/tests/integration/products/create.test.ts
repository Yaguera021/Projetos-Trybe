import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import productOne from '../../mocks/mockProducts';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 201 when product is created', async function () {
  sinon.stub(ProductModel, 'create').resolves(productOne);

  const { body, status } = await chai.request(app).post('/products').send(productOne);

  expect(status).to.be.equal(201);
  expect(body).to.be.deep.equal(productOne.dataValues);
  });
});
