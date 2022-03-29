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

// app.get('/products', (req, res) => {
//   db.query(`SELECT * FROM inventory WHERE Core LIKE ('%204')`, (error, results) =>{
//     if(!results){
//       res.status(404).send({Error: `${error}`})
//       return
//     }
//     res.send(results)
//   })

// })


// app.get('/:coreId', (req, res) => {
//   const query = `SELECT Core, Title, Location, Quantity FROM inventory JOIN locations ON inventory.Core = locations.Product_Code WHERE Core LIKE ('%${req.params.coreId}') OR Title LIKE('${req.params.coreId}%')`
  
//   db.query(query, (error, results) =>{
//     if(!results[0]){
//       res.status(404).send({Error: `Product not found. Check product ID or name and try again.`})
//       return
//     }
//     res.send(results )
//   })
// });

app.use('/product', prodRouter);

app.use('/inventory', inventoryRouter);


app.get('/prod/:name', (req, res) => {
  
})

app.put('/prod/:quantity', (req, res)=>{
  
})

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
// app.get('/:coreId', (req, res) => {
// });
