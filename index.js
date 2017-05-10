//
const mongoose = require('mongoose');
const catsModel = require('./models/Cats');


class Mongoose() {

	constructor() {

		catsModel.create({

		})


	}


	initDb() {

		mongoose.connect('mongodb://localhost:27017/chatons', (err) => {

			if (err) {

				throw new Error();
			}
		});

		mongoose.promise = global.Promise;
	}


	findCats() {

		catsModel.find().then(
			results => console.log(results)
			).catch( e => console.log(e.message));



	}


	findByAvailable() {

		catsModel.find().then(
			results => {
				results.available = true;
			})

	}

	catsAdopt() {


	}



}