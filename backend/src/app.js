const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/ping', (req, res) => {
  return res.status(200).json('Pong');
});

app.get('/pong', (req, res) => {
  return res.status(200).json('Ping');
});

app.listen(3333, () => {
  console.log('Server running');
});
