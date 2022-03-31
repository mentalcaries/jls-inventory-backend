const db = require('../database/db');
const { BadRequest } = require('../errors/bad-request');

const selectProduct = (req, res) => {

  const query = `SELECT Core, Title, Warehouse, Location, Quantity FROM inventory JOIN locations ON inventory.Core = locations.Product_Code WHERE Core ='${req.params.prod}'`;

  db.query(query, (error, results) => {
    if (!results[0]) {
      res
        .status(404)
        .send({
          Error: `Product not found. Check product ID or name and try again.`,
        });
      return;
    }
    res.send(results);
  });
};

const updateQuantity = (req, res) => {
  const { core, location, quantity} = req.body;

  db.query(`UPDATE locations SET Quantity = Quantity + ${quantity} WHERE Product_Code = '${core}' AND Location = '${location}'`, (error, results) => {
    if(!quantity || !core || !location){
      throw new BadRequest('Invalid data')
    }
    // if(results.changedRows < 1){
    //   res.status(500).send({Message: 'Something went wrong'})
    //   return
    // }
      res.send(results)
  })

}

module.exports = {selectProduct, updateQuantity};
