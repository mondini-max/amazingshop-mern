import express from 'express';
import { data } from './data/data.js';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
