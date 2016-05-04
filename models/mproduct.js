module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var product = new Schema({
            sku :String,
            name :String,
            info :String 
    });

    var Product = mongoose.model('Product', product);
    return Product;
};