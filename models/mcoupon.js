module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var coupon = new Schema({
            
            code :String,
            amount :Number,
            minimumcartvalue:Number,
            info:String,
            type:String,
            active:Boolean

    });

    var Coupon = mongoose.model('Coupon', coupon);
    return Coupon;
};