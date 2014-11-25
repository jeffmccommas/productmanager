var mongoose = require('mongoose');

var productsSchema = mongoose.Schema({
    productId: {
        type: Number,
        required: '{PATH} is required!'
    },
    productName: {
        type: String,
        required: '{PATH} is required!'
    },
    productCode: {
        type: String,
        required: '{PATH} is required!'
    },
    releaseDate: {
        type: Date,
        required: '{PATH} is required!'
    },
    description: {
        type: String,
        required: '{PATH} is required!'
    },
    cost: {
        type: Number,
        required: '{PATH} is required!'
    },
    price: {
        type: Number,
        required: '{PATH} is required!'
    },
    category: {
        type: String,
        required: '{PATH} is required!'
    },
    imageUrl: {
        type: String,
        required: '{PATH} is required!'
    },
    tags: [String]
});
var Products = mongoose.model('Products', productsSchema);

function createDefaultProducts() {
    Products.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Products.create({
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            });
            Products.create({
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved claw steel hammer",
                "cost": 1.00,
                "price": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            });
        }
    })
}

exports.createDefaultProducts = createDefaultProducts;