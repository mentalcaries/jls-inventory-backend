const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors');

const options = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
app.use(cors(options));
const app = express();
app.use(express.json())


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
