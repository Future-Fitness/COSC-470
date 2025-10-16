import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { required } from '@mr/utils';
import { router as v1 } from './routes/v1.js';

const PORT = process.env.PORT || 4000;
const MONGO = required('MONGO_URL', process.env.MONGO_URL);
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/api/v1', v1);

mongoose.connect(MONGO).then(() => {
  console.log('Mongo connected');
  app.listen(PORT, () => console.log(`API on :${PORT}`));
}).catch(err => {
  console.error('Mongo error', err);
  process.exit(1);
});
