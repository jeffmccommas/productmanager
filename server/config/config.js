/**
 * Created by jmccommas on 11/23/14.
 */


var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/productmanager',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://jmccommas:fullsail@ds059220-a0.mongolab.com:59220,ds059220-a1.mongolab.com:59220/productmanager',
        port: process.env.PORT || 80
    }
};