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
            Products.create({
                "productId": 4,
                "productName": "Coloring Pencils",
                "productCode": "CPM-0347",
                "releaseDate": "October 21, 2014",
                "description": "Premier Colored Pencils are the most popular colored pencils we sell. Each colored pencil features a thick, soft core made from brilliant, light-resistant pigments, to ensure smooth, rich laydown and color saturation.",
                "cost": 12.00,
                "price": 37.99,
                "category": "electronics",
                "tags": ["pencils", "writing pen", "school supplies"],
                "imageUrl": "images/prods/Colouring_pencils.png"
            });
            Products.create({
                "productId": 5,
                "productName": "Teaching Easel",
                "productCode": "TCE-5448",
                "releaseDate": "May 24, 2012",
                "description": "Teaching Easels are designed for teachers or individuals who will be presenting or demonstrating. They have a large sturdy area for which to attach paper or other work surface on to for demonstration purposes.",
                "cost": 35.00,
                "price": 92.99,
                "category": "electronics",
                "tags": ["easel", "teaching", "school supplies"],
                "imageUrl": "images/prods/Easel-20110501.png"
            });
            Products.create({
                "productId": 6,
                "productName": "Computer Laptop",
                "productCode": "CML-5548",
                "releaseDate": "June 24, 2014",
                "description": "Stream Web-based media on this Asus X551CA-BI30804C laptop's 15.6' high-definition display via the built-in wireless LAN, which lets you quickly access the Internet while youre on the go. The 500GB hard drive provides ample storage space.",
                "cost": 87.00,
                "price": 499.99,
                "category": "electronics",
                "tags": ["computer", "laptop", "school supplies"],
                "imageUrl": "images/prods/laptop.png"
            });

        }
    })
}

exports.createDefaultProducts = createDefaultProducts;