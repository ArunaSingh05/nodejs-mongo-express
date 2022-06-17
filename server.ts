import 'reflect-metadata';
import express from 'express';

import { routers } from './routers';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.use("/api/v1", routers);


const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/test-db')
}

connect()
  .then(async connection => {
    app.listen(4000, () => {
      console.log('Server running at http://localhost:4000');
    })
  })
  .catch(e => console.error(e))

