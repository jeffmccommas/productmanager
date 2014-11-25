var Products = require('mongoose').model('Products');

exports.getProducts = function (req, res) {
    Products.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

exports.getProductsById = function (req, res) {
    Products.findOne({
        _id: req.params.id
    }).exec(function (err, prouct) {
        res.send(prouct);
    })
}