const allProductsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const productFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};

const allProductsFromModel = allProductsFromDB;

const productFromModel = productFromDB;

const productFromModelSucessful = {
  status: 'SUCCESSFUL',
  data: productFromModel,
};

const allProductsFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: allProductsFromDB,
};

const productFromServiceSuccessful = {
  status: 'SUCCESSFUL',
  data: productFromDB,
};

const productNotFound = {
  status: 'NOT_FOUND',
  data: {
    message: 'Product not found',
  },
};

const productNotFoundWithNoMessage = {
  status: 'NOT_FOUND',
  data: {},
};

const productDeleted = {
  status: 'DELETED',
  data: {
    message: 'Product deleted',
  },
};

module.exports = {
  allProductsFromDB,
  productFromDB,
  allProductsFromModel,
  productFromModel,
  allProductsFromServiceSuccessful,
  productFromServiceSuccessful,
  productNotFound,
  productFromModelSucessful,
  productDeleted,
  productNotFoundWithNoMessage,
};