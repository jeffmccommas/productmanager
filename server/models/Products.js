(function () {
    "use strict";
    var mongoose = require('mongoose');

    var productsSchema = mongoose.Schema({
        productId: {
            type: Number
            // required: '{PATH} is required!'
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
            // required: '{PATH} is required!'
        },
        imageUrl: {
            type: String,
            default: "images/prods/pocket_pc.png"
            // required: '{PATH} is required!'
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
                    "tags": ["blackboard", "board", "classroom", "chalkboard"],
                    "imageUrl": "images/prods/magnetic-blackboard_0.jpg"
                });
                Products.create({
                    "productId": 2,
                    "productName": "New Text Books",
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
                Products.create({
                    "productId": 7,
                    "productName": "Computer Monitor",
                    "productCode": "CPM-9548",
                    "releaseDate": "August 24, 2011",
                    "description": "With 1600 x 900 maximum resolution and a 5 ms response time, this Dell E2015HV MH7HK LCD monitor reproduces your media and other high-definition images in striking, rich detail. The VGA input and plug-and-play design make it easy to hook up your PC.",
                    "cost": 45.00,
                    "price": 199.99,
                    "category": "electronics",
                    "tags": ["computer", "monitor", "school supplies"],
                    "imageUrl": "images/prods/monitor_CRT.png"
                });
                Products.create({
                    "productId": 8,
                    "productName": "School Notebook",
                    "productCode": "SCN-6542",
                    "releaseDate": "September 24, 2014",
                    "description": "200gsm, 25% cotton cold pressed, watercolor paper is thread-bound to the Moleskine textured covers. An inner pocket holds notes and the elastic band on the short side keeps book securely closed.",
                    "cost": 2.00,
                    "price": 12.99,
                    "category": "electronics",
                    "tags": ["notebook", "books", "school supplies"],
                    "imageUrl": "images/prods/notebook.png"
                });
                Products.create({
                    "productId": 9,
                    "productName": "Pencils Pen Stand",
                    "productCode": "PPS-6242",
                    "releaseDate": "March 24, 2013",
                    "description": "Put your pens on a pedestal! This clear acrylic stand lets in plenty of light for maximum shimmer. The pens are visible from all angles, and the clear stand keeps the focus on your pens. Great for displaying at craft shows. Holds up to 7 pens in a variety of sizes.",
                    "cost": 1.00,
                    "price": 4.99,
                    "category": "electronics",
                    "tags": ["penstand", "pencil", "school supplies"],
                    "imageUrl": "images/prods/penstand.png"
                });
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
                Products.create({
                    "productId": 13,
                    "productName": "New Items",
                    "productCode": "STB-6173",
                    "releaseDate": "May 30, 2013",
                    "description": "A good school bag or backpack is essential for any back to school, hiking or wilderness expeditions. Our range of rucksacks have all been carefully selected for their performance, durability and quality.",
                    "cost": 13.00,
                    "price": 29.99,
                    "category": "electronics",
                    "tags": ["carry bag", "bag", "school supplies"],
                    "imageUrl": "images / prods / pocket_pc.png"
                });
            }
        })
    }
    exports.createDefaultProducts = createDefaultProducts;
}());