var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Brand = mongoose.model('Brand');

router.get('/addbrand', function(req, res) {
    res.render('brandAddnew.html');
});
router.get('/deletebrand', function(req, res) {
 
});
router.get('/editbrand', function(req, res) {
    res.render('brandAddnew.html');
});

router.post('/createbrand',createBrand);

function createBrand (req, res){

    var brand = new Brand(req.body);
    brand.save(function(err, brand){
        if(err){
            console.log("Brand not inserted");
            res.statusCode = 404;
        }
        if(brand){
            console.log("Brand created"+ brand);
            res.redirect('/brand/');

        }
    });
}
router.get('/', listBrand);
function listBrand(req,res)
{
    Brand.find({}, function(err, brand){
        res.render('brand.html', {"brands" : brands});
    });
}
router.post('/editbrand',editbrand);
function editbrand(req,res){

    Brand.update({_id:req.params.id}, {$set:{Name:req.body.Name,
        Info :req.body.Info,
        Image :req.body.Image,
        Status :req.body.Status
    }}, {w:1}, function(err, result) {
        if(err){
            console.log(err.stack);
        }
        res.json({ message: 'Brand updated!' });
    });
}

module.exports = router;