const Product = require("../models/product.model");

module.exports.allProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({ products: allProducts }))
        .catch((err) =>
            res.json({ message: "Error: ", error: err })
        );
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((singleProduct) => res.json({ product: singleProduct }))
        .catch((err) =>
            res.json({ message: "Error: ", error: err })
        );
};

module.exports.newProduct = (req, res) => {
    Product.create(req.body)
        .then((createdProduct) => res.json({ user: createdProduct }))
        .catch((err) =>
            res.json({ message: "Error", error: err })
        );
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedProduct) => res.json({ product: updatedProduct }))
        .catch((err) =>
            res.json({ message: "Error: ", error: err })
        );
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) =>
            res.json({ message: "Error: ", error: err })
        );
};