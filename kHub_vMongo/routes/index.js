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
      title : "Database output",
      "peopleDatabase" : docs
    });
  });
});

/*GET test data entry page */
router.get('/dbtestinput', function(req, res, next) {
  res.render('dbtestinput', {
    title : "Data input"
  })
});

router.post('/addToDB', function(req, res) {

  var db = req.db;

  var userName = req.body.username;
  var userRole = req.body.userrole;
  var userImageURL = req.body.imageURL;
  var userSkill1 = req.body.userSkill1;
  var userSkill2 = req.body.userSkill2;
  var userCampaign = req.body.usercampaign;

  var collection = db.get('peoplecollection');

  collection.insert({
    name : userName,
    role : userRole,
    imageURL : userImageURL,
    skill1 : userSkill1,
    skill2 : userSkill2,
    campaign : userCampaign
  }, function (err, doc) {
    if (err) {
      res.send("Failed insertion into database")
    } else {
      res.redirect("dbtestoutput");
    }
  });
});

module.exports = router;
