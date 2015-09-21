var itemStorage = require('./storage_service.js')

var truncatedBlurbWordLength = 32;

var Item = function() {

	this.title = '';
	this.author = '';
	this.blurb = '';
	this.isTruncated = false;
	this.thumbnailUrl = '';
	this.detailsUrl = '';
};


function truncateText(text, length) {

	var result = '',
		resultArray;

	if(typeof text === 'string') {

		if (text.length > 0) {
			resultArray = text.split(' ');
		} 

		if(resultArray.length > length){
			resultArray = resultArray.slice(0, length);
			result = resultArray.join(' ') + ' ...';
		}
	}

    return result || text;

}

exports.getItemsTruncated = function(numItems) {
	var items,
		output = [],
		i,
		item;

	items = itemStorage.getItems(numItems);

	for(i=0; i<items.length; i++){

		//create new item and add to output array
		item = new Item();

		item.title = items[i].title;
		item.author = items[i].author;

		//need to trim number of words
		item.blurb = truncateText(items[i].text, truncatedBlurbWordLength);

		//set isTruncated if text was changed
		if (item.blurb !== items[i].text) {
			item.isTruncated = true;
		}

		item.thumbnailUrl = items[i].thumbnailUrl;
		item.detailsUrl = items[i].detailsUrl;

		output.push(item);
	}

	return output;
};