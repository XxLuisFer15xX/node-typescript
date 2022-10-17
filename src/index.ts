import express from 'express';
import dotenv from 'dotenv';
import diaryRouter from './routes/diaries.routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.text());

app.use('/', (req, _res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/api/diaries', diaryRouter);

app.get('/ping', (_req, res) => {
  console.log('ping');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});
