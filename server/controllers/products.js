(function () {
    "use strict";

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
    };
    exports.updateProduct = function (req, res) {
        var productData = req.body,
            id = productData._id;
        delete productData._id;
        if (id) {
            Products.update({
                _id: id
            }, productData, {
                upsert: true
            }, function (err) {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(400);
                }
            });
        } else {
            res.sendStatus(400);
        }
    };

    exports.createProduct = function (req, res) {
        var productData = req.body;
        console.log(productData);
        Products.create(productData, function (err, document) {
            console.log(err);
            if (!err) {
                res.send(document);
            } else {
                res.sendStatus(400);
            }
        });
    }

    exports.deleteProductsById = function (req, res) {
        Products.remove({
            _id: req.params.id
        }, 1).exec(function (err, prouct) {
            res.sendStatus(200);
        });
    };

}());