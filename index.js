const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const { response } = require('express');

const app = express();
app.use(cors());
app.use(express.json())
const {PORT = 3000, DB_HOST, DB_PASSWORD, DB_NAME} = process.env;

const db = mysql.createPool({
  host:  DB_HOST,
  user: process.env.DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// get all stats in database, locations, quantities locally and globally
// GET 
// select product based on name OR id
// view locations and update quantities

app.get('/:coreId', (req, res) => {
  const query = `SELECT Core_Number, Internal_Title, Location, Quantity FROM cores JOIN locations ON cores.Core_Number = locations.Product_Code WHERE Core_Number LIKE ('%${req.params.coreId}') OR Internal_Title LIKE('${req.params.coreId}%')`
  db.query(query, (error, results) =>{
    if(!results[0]){
      res.status(404).send({Error: `Product not found. Check product ID or name and try again.`})
      return
    }
    res.send(results )
  })
});

app.get('/prod/:name', (req, res) => {
  
})

app.put('/prod/:quantity', (req, res)=>{
  
})

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
