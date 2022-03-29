const express = require('express');
const router = express.Router();

const {selectProduct, updateQuantity} = require('../controllers/inventory');

router.get('/:prod', selectProduct);

router.patch('/update', updateQuantity)


module.exports = router;
