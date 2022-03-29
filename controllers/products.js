const db = require('../database/db')

const getProduct = (req, res) => {

  const query = `SELECT * FROM inventory JOIN locations ON inventory.Core = locations.Product_Code WHERE Core LIKE ('%${req.params.coreId}') OR Title LIKE('${req.params.coreId}%')`;

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

module.exports = {getProduct};
