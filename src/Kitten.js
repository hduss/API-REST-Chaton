//
import mongoose from 'mongoose';
import yaml from'yamljs';






export default class Kitten{


	constructor() {

		this.cat = monggitoose.model('cats', {

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

				result => console.log(result)
				)

			.catch( e => console.log(e.message))

			;
	}

	findKitten(name, color) {

		this.cat.findOne({

			name: name,
			color: color

		})

		.then(

			result => console.log(result)
			)

		.catch( e => console.log(e.message));

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

		this.cat.findOne({

			available: param

		}).then(

			results => console.log(results)

		).catch( e => console.log(e.message));


	}

/*
	updateKitten(name, color, quality1, quality2, defaults, bestFood, available, (err, tank) => {

		if (err) return handlError(err);

	}) {

		this.cat.findOne({

			name: name;

		}).then(

			name = name,
			color: color,
			quality1: quality1,
			quality2: quality2,
			defaults: defaults,
			bestFood: bestFood,
			available: available
r)

	}



Tank.findById(id, function (err, tank) {
  if (err) return handleError(err);
  
  tank.size = 'large';
  tank.save(function (err, updatedTank) {
    if (err) return handleError(err);
    res.send(updatedTank);
  });
});

*/
	removeKitten(name, color) {

		this.cat.findOne({

			name: name,
			color: color
		}).then(

			result => {

				this.cat.remove({name: result.name})

				.then(

					result => console.log(result)
					)
				.catch( e => console.log(e.message));

			});
	}


}


