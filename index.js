//
const mongoose = require('mongoose');

const db = mongoose.connection;

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/chatons');


db.on('connect', () => {


});