module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var category = new Schema({
            
            name :String,
            info :String,
            category:String,
            parentcategory:String,
            active :Boolean

    });

    var Category = mongoose.model('Category', category);
    return Category;
};