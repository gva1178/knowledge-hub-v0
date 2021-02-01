var express = require('express');
var router = express.Router();

const titleString = "Bluebonnet Knowledge Hub"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: titleString });
});

/*GET test helloWorld page */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title : "Hello world"});
})

/*GET test database output page */
router.get('/dbtestoutput', function(req, res, next) {
  var db = req.db;
  var collection = db.get('peoplecollection');
  collection.find({}, {}, function(e,docs) {
    res.render('dbtestoutput', {
      title : "Test output",
      "peopleDatabase" : docs
    });
  });
});

/*GET test data entry page */
router.get('/dbtestinput', function(req, res, next) {
  
});


module.exports = router;
