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

/*GET test data entry page */
router.get('/dbtestoutput', function(req, res, next) {
  var db = req.db;
  var collection = db.get('peoplecollection');
  console.log("here");
  //console.log(collection.find().then);
  collection.find().toArray(function(e, items) {
    if (err) throw err;
    console.log(items);
  });
  collection.find({}, {}, function(e,docs) {
    res.render('dbtestoutput', {
      title : "Test output",
      "peopleDatabase" : docs
    });
  });
});

module.exports = router;
