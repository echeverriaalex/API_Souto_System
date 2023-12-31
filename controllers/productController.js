const db = require("../models/index");
const { Product } = db;

const createProduct = async(req, res, next) =>{
    let body = req.body;
    let {brand, description, code, price} = body;
    Product.create({
        brand: brand,
        description: description,
        code: code,
        price: price
    })
    .then(product => res.status(201).send(product))
    .catch(err => res.status(400).send(err))    
}

// Ninguna funcion se autocompleta
const getProducts = (req, res, next) =>{
    Product.findAll()
        .then(products => res.status(200).send(products))
        .catch(err => next(err))   
}

const getProduct = async(req, res, next) =>{
    
}


const editProduct = async(req, res, next) =>{
    
}

const deleteProduct = async(req, res, next) =>{
    
}

const hola = (req, res)=>{
    console.log("hola");
    res.send("holaa")
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    editProduct,
    deleteProduct,
    hola
}