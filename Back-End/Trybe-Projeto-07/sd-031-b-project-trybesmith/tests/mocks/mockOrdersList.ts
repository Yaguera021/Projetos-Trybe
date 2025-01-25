import OrderModel from "../../src/database/models/order.model";

const ordersList = OrderModel.bulkBuild( 
[
  {
    id: 1,
    userId: 2,
  },
  {
    id: 2,
    userId: 1,
  }
]);

export default ordersList;

