var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');

router.get('/addcategory', function(req, res) {
    res.render('categoryAddnew.html');
});
router.get('/deletecategory/:id', deletecategory);

function deletecategory(req,res){

    Category.remove({"_id":req.params.id},function(err, category){
        if(err){
            console.log(err.stack);
        }
        console.log("category delted");
        res.redirect('/category/');
    });

}
router.get('/editcategory/:id', function(req, res) {
    Category.findOne({"_id":req.params.id},function(err, category){
        res.render('categoryAddnew.html',{"category" : category});
    });

});
router.post('/createcategory',createCategory);

function createCategory (req, res){

    var category = new Category(req.body);
    category.save(function(err, category){
        if(err){
            console.log("category not inserted");
            res.statusCode = 404;
        }
        if(category){
            console.log("category created"+ category);
            res.redirect('/category/');

        }
    });
}

router.get('/', listCategory);
function listCategory(req,res)
{
    Category.find({}, function(err, categories){
        res.render('category.html', {"categories" : categories});
    });
}

module.exports = router;