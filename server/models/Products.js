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
                "productId": 10,
                "productName": "Pocket PC",
                "productCode": "POC-6725",
                "releaseDate": "July 9, 2014",
                "description": "This is the wireless device you’ve been waiting for. Browse the web and check email from your office, campus, or a home Wi-Fi network—and places like airports, cafes, and hotels.",
                "cost": 33.00,
                "price": 59.99,
                "category": "electronics",
                "tags": ["pocket pc", "computer", "school supplies"],
                "imageUrl": "images/prods/pocket_pc.png"
            });
            Products.create({
                "productId": 11,
                "productName": "Rucksack",
                "productCode": "RSK-6175",
                "releaseDate": "October 9, 2013",
                "description": "A good rucksack or backpack is essential for any trekking, hiking or wilderness expeditions. Our range of rucksacks have all been carefully selected for their performance, durability and quality.",
                "cost": 11.00,
                "price": 29.99,
                "category": "electronics",
                "tags": ["backpack", "bag", "school supplies"],
                "imageUrl": "images/prods/rucksack.png"
            });
            Products.create({
                "productId": 12,
                "productName": "School Bag",
                "productCode": "SCB-6173",
                "releaseDate": "May 30, 2013",
                "description": "A good school bag or backpack is essential for any back to school, hiking or wilderness expeditions. Our range of rucksacks have all been carefully selected for their performance, durability and quality.",
                "cost": 11.00,
                "price": 29.99,
                "category": "electronics",
                "tags": ["carry bag", "bag", "school supplies"],
                "imageUrl": "images/prods/school_bag.png"
            });
        }
    })
}

exports.createDefaultProducts = createDefaultProducts;