var express = require('express');
var router = express.Router();

const titleString = "Bluebonnet Knowledge Hub"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: titleString });
});

module.exports = router;
