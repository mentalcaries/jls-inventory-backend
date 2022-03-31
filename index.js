const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.options('*', cors());

const PORT = process.env.PORT || 4000;

const prodRouter = require('./routes/products');
const inventoryRouter = require('./routes/inventory');

// Product viewer
app.use('/product', prodRouter);

// Inventory Updater
app.use('/inventory', cors(), inventoryRouter);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
