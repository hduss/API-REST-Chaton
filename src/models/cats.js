const mongoose = require('mongoose');
const schema = mongoose.Schema;


const cats = new schema({

	name: { type: String, required: true, unique: true },
	color: { type: String, required: true},
	quality1: { type: String, required: true},
	quality2: { type: String, required: false},
	defaults: { type: String, required: false},
	bestFood: { type: String, required: false},
	available: { type: Boolean, required: true}


});


module.exports = mongoose.model('cats', cats);