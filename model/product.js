module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var product = new Schema({
            Sku :String,
            Name :String,
            Info :String 
    });

    var Product = mongoose.model('Product', product);
    return Product;
};