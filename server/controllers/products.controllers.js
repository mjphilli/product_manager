const Products = require("../models/products.model")


//all products
module.exports.allProducts = (req, res) =>{
    Products.find()
        .then(productList => res.json(productList))
        .catch(err => res.status(400).json(err))
}


//one product
module.exports.oneProduct = (req, res) =>{
    Products.findOne({_id: req.params.id}) // return the found object
        .then(foundProduct => res.json(foundProduct))
        .catch(err => res.status(400).json(err))
}


//create product
module.exports.addProduct = (req, res) =>{
    Products.create(req.body) // will return new object
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err))
}

//update product
module.exports.updateProduct = (req, res) =>{
    Products.findOneAndUpdate(
        {_id: req.params.id}, //criteria
        req.body, //form data
        {new: true, runValidators: true} 
        //new: true - returns updated object
        //runvalidators: true - to perform validation specificed on model
    )
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.status(400).json(err))
}

//delete product
module.exports.deleteProduct = (req, res) =>{
    Products.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err))
}