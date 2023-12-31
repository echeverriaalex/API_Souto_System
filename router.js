const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const ProductController = require('./controllers/productController');

router.use(morgan());
router.use(bodyParser.json())

router.post('/product', ProductController.createProduct);
router.get('/products', ProductController.getProducts);
//router.get('/product/:id', ProductController.getProduct);
//router.put('/product/:id', ProductController.editProduct);
//router.delete('/product/:id', ProductController.deleteProduct);

/*
router.get('', );
router.get('', );
router.get('', );
*/

router.get('/hola', ProductController.hola);


module.exports = router;