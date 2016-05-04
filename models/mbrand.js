module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var brand = new Schema({
            
            name :String,
            info :String,
            image:String,
            active :Boolean

    });

    var Brand = mongoose.model('Brand', brand);
    return Brand;
};