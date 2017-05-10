//
import mongoose from 'mongoose';
import yaml from'yamljs';






export default class Kitten{


	constructor() {

		this.cat = mongoose.model('cats', {

			name: { type: String, required: true, unique: true },
			color: { type: String, required: true},
			quality1: { type: String, required: true},
			quality2: { type: String, required: false},
			defaults: { type: String, required: false},
			bestFood: { type: String, required: false},
			available: { type: Boolean, required: true}

		});
		

	}


	addKitten(name, color, quality1, quality2, defaults, bestFood, available) {

		return new Promise ((resolve, reject) => {

			this.cat.create({

				name: name,
				color: color,
				quality1: quality1,
				quality2: quality2,
				defaults: defaults,
				bestFood: bestFood,
				available: available

			})
				.then(

					results => resolve(results)
					)

				.catch( e => reject(e.message));
		});



	}




	findKitten(name, color) {

		return new Promise((resolve, reject) => {

			this.cat.findOne({

				name: name,
				color: color

			})

			.then(result => resolve(result)
				)

			.catch( e => reject(e.message));
			
		});


	}




	findKittens() {

		return new Promise((resolve, reject) => {
			this.cat.find()
				.then(results => resolve(results))
				.catch( e => reject(e.message));
		});

	}



	// param -> true || false
	kittensAdopt(param) {

		return new Promise((resolve, reject) => {


			this.cat.find({

				available: param

			}).then(

				results => resolve(results)

			).catch( e => reject(e.message));

			
		});



	}


	updateKitten(name, color, quality1, quality2, defaults, bestFood, available ) {

		return new Promise((resolve, reject) => {


			console.log(this.color);

			this.cat.findOne({

		    	name: name

		    }).then(

		    	results => {
		    		results.color = color,
		    		results.quality1 = quality1,
		    		results.quality2 = quality2 || this.quality2,
		    		results.defaults = defaults || this.defaults,
		    		results.bestFood = bestFood || this.besFood,
		    		results.available = available;

		    		results.save().then(

		    			resultSaved => resolve(resultSaved)

		    		).catch( e => reject(e.message));
		    	}

		    ).catch( e => console.log(e.message));

			
		});

		

	}



	removeKitten(name, color) {

		return new Promise((resolve, reject) => {

			this.cat.findOne({

				name: name,
				color: color

			}).then(

				result => {

					this.cat.remove({name: result.name})

					.then(

						result => resolve(result)
						)
					.catch( e => reject(e.message));

				});



			
		});

	}


}

