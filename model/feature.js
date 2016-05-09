module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var featureSchema = new Schema({

        Key:String,
        Value:String,
        Active:Boolean

    });

    var Feature = mongoose.model('Feature', featureSchema);
    return Feature;
};