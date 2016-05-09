var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Coupon = mongoose.model('Coupon');

router.get('/addcoupon', function(req, res) {
    res.render('couponAddnew.html');
});
router.get('/deletecoupon/:id', deletecoupon);

function deletecoupon(req,res){

    Coupon.remove({"_id":req.params.id},function(err, coupon){
        if(err){
            console.log(err.stack);
        }
        console.log("coupon deleted");
        res.redirect('/coupon/');
    });

}
router.get('/editcoupon/:id', function(req, res) {
    Coupon.findOne({"_id":req.params.id},function(err, coupon){
        res.render('couponAddnew.html',{"coupon" : coupon});
    });

});
router.post('/createcoupon',createCoupon);

function createCoupon (req, res){

    var coupon = new Coupon(req.body);
    coupon.save(function(err, coupon){
        if(err){
            console.log("coupon not inserted");
            res.statusCode = 404;
        }
        if(coupon){
            console.log("coupon created"+ coupon);
            res.redirect('/coupon/');

        }
    });
}

router.get('/', listCoupon);
function listCoupon(req,res)
{
    Coupon.find({}, function(err, coupons){
        res.render('coupon.html', {"coupons" : coupons});
    });
}

module.exports = router;