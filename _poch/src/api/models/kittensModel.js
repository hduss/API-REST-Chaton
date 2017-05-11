import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const kittens = new Schema({
    name: { type: String, required: true, unique: true },
    color: { type: String, required: true},
    quality1: { type: String, required: true},
    quality2: { type: String, required: false},
    defaults: { type: String, required: false},
    bestFood: { type: String, required: false},
    available: { type: Boolean, default: true}
});

module.exports = mongoose.model('Kittens', kittens);
