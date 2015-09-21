var express = require('express');
var router = express.Router();

//all items
router.get('/', function(req, res, next) {
  res.send('It worked!');
});

module.exports = router;
