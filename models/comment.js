var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	content: String
});

module.exports = mongoose.model('Comment', Comment);