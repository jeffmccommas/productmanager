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
                "productName": "School Blackboard",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2011",
                "description": "A premium magnetic blackboard with solid wood trim. This best quality blackboard is constructed of Porcelain Enameled Steel (50-Year Manufacturer Guarantee). The magnetic chalkboard surface is black and framed with a solid Oak wood frame and full-length chalkboard accessory tray.",
                "cost": 29.00,
                "price": 100.95,
                "category": "supplies",
                "tags": ["blackboard", "board", "classroom","chalkboard"],
                "imageUrl": "images/prods/magnetic-blackboard_0.jpg"
            });
            Products.create({
                "productId": 2,
                "productName": "New and Used Text Books",
                "productCode": "NAU-9188",
                "releaseDate": "May 21, 2013",
                "description": "Wouldn't you rather buy cheap college textbooks and have more money to ... textbooks for an Amazon Gift Card, whether you bought your books from us or not.",
                "cost": 12.00,
                "price": 45.99,
                "category": "books",
                "tags": ["books", "textbook", "school", "supplies"],
                "imageUrl": "images/prods/BOOKS.png"
            });
            Products.create({
                "productId": 3,
                "productName": "Electronics Calculator",
                "productCode": "ELC-3348",
                "releaseDate": "April 21, 2003",
                "description": "Ideal for Pre-Algebra, Algebra 1 & 2, Trigonometry, Geometry, Pre-calculus, Statistics, Business & Finance, Biology, Physics, Chemistry, Calculus, AP Statistics, AP Physics, AP Calculus, Engineering (Electrical and Mechanical) and Linear Algebra",
                "cost": 23.00,
                "price": 78.99,
                "category": "electronics",
                "tags": ["calculator", "electronics", "school supplies"],
                "imageUrl": "images/prods/calculator.png"
            });

        }
    })
}

exports.createDefaultProducts = createDefaultProducts;