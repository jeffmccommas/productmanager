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
        }
    })
}

exports.createDefaultProducts = createDefaultProducts;