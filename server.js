import express from 'express';
import cors from 'cors';
import productRouter from './routers/product.route.js';
import billRouter from './routers/bill.route.js';
import guestRouter from './routers/guest.route.js';
// import summaryRouter from './routers/summary.route.js';
import summaryRouter from './routers/summary.route.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/product', productRouter);
app.use('/bill', billRouter);
app.use('/guest', guestRouter);
app.use('/summary', summaryRouter);

app.listen(3000,console.log('Listening 3000'));