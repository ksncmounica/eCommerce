module.exports = function(mongoose) {
    "use strict";
    var Schema = mongoose.Schema;
    var categorySchema = new Schema({
            
            Name :String,
            Info :String,
            Category:String,
            ParentCategory:String,
            Active :Boolean

    });

    var Category = mongoose.model('Category', categorySchema);
    return Category;
};