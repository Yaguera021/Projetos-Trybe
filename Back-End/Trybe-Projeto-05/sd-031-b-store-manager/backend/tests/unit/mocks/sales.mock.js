const addSalesMock = [
  {
    id: 3,
    itemsSold: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ],
  },
];

const salesById = [
  {
    date: '2023-09-21T23:57:17.000Z',
    productId: 3,
    quantity: 15,
  },
];

const salesMockSuccess = {
  status: 'SUCCESSFUL',
  data: addSalesMock,
};

const salesNotFound = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

const salesMock = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
    date: '2023-09-21T23:57:17.000Z',
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
    date: '2023-09-21T23:57:17.000Z',
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
    date: '2023-09-21T23:57:17.000Z',
  },
];

const salesBodyMock = [
  {
    productId: 1,
    quantity: 5,
  },
  {
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  addSalesMock,
  salesMockSuccess,
  salesById,
  salesMock,  
  salesBodyMock,
  salesNotFound,
};