const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
app.options('*', cors());

const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;
const PORT = process.env.PORT || 4000;

const db = mysql.createPool({
  host:  DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});


// get all stats in database, locations, quantities locally and globally
// GET 
// select product based on name OR id
// view locations and update quantities

app.get('/', (req, res) => {
  db.query('SELECT * FROM sample', (error, results) =>{
    if(!results){
      res.status(404).send({Error: `${error}`})
      return
    }
    res.send(results)
  })

})


// app.get('/:coreId', (req, res) => {

  
//   const query = `SELECT Core_Number, Internal_Title, Location, Quantity FROM inventory JOIN locations ON inventory.Core_Number = locations.Product_Code WHERE Core_Number LIKE ('%${req.params.coreId}') OR Internal_Title LIKE('${req.params.coreId}%')`
  
//   db.query(query, (error, results) =>{
//     if(!results){
//       res.status(404).send({Error: `${error}, Product not found. Check product ID or name and try again.`})
//       return
//     }
//     res.send(results )
//   })
// });

app.get('/prod/:name', (req, res) => {

})

app.put('/prod/:quantity', (req, res)=>{
  
})

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
