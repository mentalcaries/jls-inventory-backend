const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
app.options('*', cors());


const PORT = process.env.PORT || 4000;

const prodRouter = require('./routes/products')
const inventoryRouter = require('./routes/inventory')


// get all stats in database, locations, quantities locally and globally

// GET 
// select product based on name OR id
// view locations and update quantities

app.use('/product', prodRouter);

app.use('/inventory', inventoryRouter);


app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
