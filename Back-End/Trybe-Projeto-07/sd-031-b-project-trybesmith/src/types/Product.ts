import { Optional } from 'sequelize';

export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type ProductOptId = Optional<Product, 'id' >;