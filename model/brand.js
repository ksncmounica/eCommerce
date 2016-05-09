module.exports = function(mongoose) {
    "use strict";
    var Schema = mongoose.Schema;
    var brandSchema = new Schema({
            Name :String,
            Info :String,
            Image :String,
            Status :Boolean
    });

    var Brand = mongoose.model('Brand', brandSchema);
    return Brand;
};
