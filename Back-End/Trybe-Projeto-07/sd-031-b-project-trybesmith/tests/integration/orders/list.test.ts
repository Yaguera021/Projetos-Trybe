import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import ordersList from '../../mocks/mockOrdersList';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('should return 200 and a list of orders', async function () {
    sinon.stub(OrderModel, 'findAll').resolves(ordersList);

    const { body, status } = await chai.request(app).get('/orders');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });
});
