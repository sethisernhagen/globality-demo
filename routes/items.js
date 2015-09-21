var express = require('express');
var router = express.Router();
var item = require('../models/item.js');


//single page of items
router.get('/:page_size', function(req, res, next) {

	var page_size = req.params.page_size;
	res.send(item.getItemsTruncated(page_size));
});

module.exports = router;