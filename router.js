const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const ProductController = require('./controllers/productController');
const app = express();
//router.use(morgan());

// Usar express.json() o bodyParser.json() es lo mismo es para que lea 
// la info que se envia por body
//app.use(express.json());
router.use(bodyParser.json())

router.post('/product', ProductController.createProduct);
router.get('/products', ProductController.getProducts);
router.get('/product/:code', ProductController.getProductByID);
//router.get('/product/:id', ProductController.getProduct);
//router.put('/product/:id', ProductController.editProduct);
//router.delete('/product/:id', ProductController.deleteProduct);


//router.get('', );


router.get('/', (req, res)=>{
    res.send("Welcome to Souto System API Rest")
});

router.get('/hola', ProductController.hola);

router.get('**', (req, res)=>{
    res.send("Error point not found")
});


module.exports = router;