import ProductModel from "../../src/database/models/product.model";

const productsArray = ProductModel.bulkBuild([
  {
    id: 1,
    name: 'Espada de aço',
    price: '10 peças de ouro',
    orderId: 1,
  },
  {
    id: 2,
    name: 'Escudo de madeira',
    price: '5 peças de ouro',
    orderId: 1,
  },
  {
    id: 3,
    name: 'Poção de cura',
    price: '3 peças de ouro',
    orderId: 2,
  }
]);

export default productsArray;