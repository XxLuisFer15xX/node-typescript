import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.text());

app.get('/ping', (_req, res) => {
  console.log('ping');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`);
});
