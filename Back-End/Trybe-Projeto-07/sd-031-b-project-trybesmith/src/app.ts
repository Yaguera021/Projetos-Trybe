import express from 'express';
import productRouter from './routes/product.router';
import orderRouter from './routes/order.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
