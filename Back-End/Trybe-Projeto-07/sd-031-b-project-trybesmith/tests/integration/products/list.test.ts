import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel  from '../../../src/database/models/product.model';
import productsArray from '../../mocks/productsMockArray';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 and a list of products', async function () {
    sinon.stub(ProductModel, 'findAll').resolves(productsArray);

    const { body, status } = await chai.request(app).get('/products');

    expect(status).to.be.equal(200);
    productsArray.forEach((product, index) => {
      expect(body[index]).to.be.deep.equal(product.dataValues);
    });
    expect(body).to.be.an('array');
  });
});
