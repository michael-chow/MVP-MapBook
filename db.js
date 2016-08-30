var mongoose = require('mongoose');

var CollectionSchema = mongoose.Schema({
	title: String,
	des: String,
	lat: Number,
	lng: Number
});

module.exports = mongoose.model('collection', CollectionSchema);