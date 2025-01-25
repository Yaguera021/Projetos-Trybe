import  ProductModel from '../../src/database/models/product.model';

const productOne = ProductModel.build({
  id: 1,
  name: 'Espada de aço',
  price: '10 peças de ouro',
  orderId: 1,
});

export default productOne;