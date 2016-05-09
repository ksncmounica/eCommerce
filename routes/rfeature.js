var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feature = mongoose.model('Feature');

router.get('/addfeature', function(req, res) {
    res.render('featureAddnew.html');
});
router.get('/deletefeature/:id',deleteFeature);

function deleteFeature(req,res){

    Feature.remove({_id:req.params.id},function(err, feature){
            if(err){
                console.log(err.stack);
            }
            console.log("feature delted");

            res.redirect('/feature/');
        });
}

router.get('/editfeature/:id',editfeature);

function editfeature(req, res){

        Feature.findOne({"_id":req.params.id},function(err, feature){
            if(err){
                res.render({"msg" : "Something went wrong"});
            }
            res.render('featureAddnew.html', {"feature": feature});
        });
}


router.post('/createfeature',createFeature);

function createFeature(req,res){
    var feature = new Feature(req.body);
    feature.save(function(err, feature){
        if(err){
            console.log("feature not added");
            res.statusCode = 404;
        }
        if(feature){
            console.log("Feature added"+ feature);
            res.redirect('/feature/');

        }
    });
}

router.get('/',showAllFeatures);


function showAllFeatures(req,res){
    Feature.find({}, function(err, features){
        res.render('feature.html', {"features" : features});
    });
}

module.exports = router;