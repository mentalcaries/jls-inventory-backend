const db = require('../database/db');
const { BadRequest } = require('../errors/bad-request');

const selectProduct = (req, res) => {

  const query = `SELECT Core, Title, Warehouse, Location, Quantity FROM inventory JOIN locations ON inventory.Core = locations.Product_Code WHERE Core LIKE ('%${req.params.prod}') OR Title LIKE('${req.params.prod}%')`;

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
  const { core, location, adjustBy} = req.body;

  db.query(`UPDATE locations SET Quantity = Quantity + ${adjustBy} WHERE Product_Code = '${core}' AND Location = '${location}'`, (error, results) => {
    if(!adjustBy || !core || !location){
      throw new BadRequest('Invalid data')
    }
    if(results)
    res.send(results)
  })

}

module.exports = {selectProduct, updateQuantity};
