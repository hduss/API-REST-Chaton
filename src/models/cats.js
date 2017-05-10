const mongoose = require('mongoose');
const schema = mongoose.Schema;


const cats = new Schema({

	name: { type: String, required: true, unique: true },
	color: { type: String, required: true},
	quality1: { type: String},
	quality2: { type: String, required: false},
	default: { type: String},
	bestFood: { type: String},
	available: { type: Boolean, required: true}


});


module.exports = mongoose.model('cats', cats);