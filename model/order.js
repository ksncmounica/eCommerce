module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var order = new Schema({
        Userid: String ,
        Orderid: String ,
        Qty:Number,
        UnitPrice:Number,
        ShippingCharge:Number,
        Coupon:Number,
        OrderTotal:Number,
        Status: {type: String, enum: ['RECEIVED', 'INSTOCK', 'SHIPPED','DELIVERED','OUTOFDELIVERY']}
            
    });

    var Order = mongoose.model('Order', order);
    return Order;
};