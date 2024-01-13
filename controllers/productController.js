const db = require("../models/index");
const { Product } = db;

const createProduct = async(req, res, next) =>{
    let body = req.body;
    let {brand, description, code, price, image} = body;
    console.log("create prodcut");
    Product.create({
        brand: brand,
        description: description,
        code: code,
        price: price,
        image: image
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

const getProduct2 = async(req, res, next) =>{
    Product.findOne({ where: {code: "5435345"}})
        .then(products => res.status(200).send(products))
        .catch(err => next(err))
}

const getProductByID = async(req, res, next) =>{

    const { code } = req.params;
    //console.log("code find ---> " + code);
    Product.findOne({ where: {code: code}})
        .then(products => res.status(200).send(products))
        .catch(err => next(err))
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
    getProductByID,
    getProducts,
    editProduct,
    deleteProduct,
    hola
}