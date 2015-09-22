var express = require('express');
var router = express.Router();
var item = require('../models/item.js');


//single page of items
router.get('/:page/:num_items', function(req, res, next) {

	var page = parseInt(req.params.page),
		numItems = parseInt(req.params.num_items);

	res.send(item.getItemsPage(page, numItems));
});

module.exports = router;