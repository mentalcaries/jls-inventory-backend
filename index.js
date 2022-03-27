const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'spiral0ut',
  database: 'TestDb',
});

const app = express();
app.use(cors());
const {PORT = 3000} = process.env;

app.get('/', (req, res) => {
  res.send('Now serving');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
