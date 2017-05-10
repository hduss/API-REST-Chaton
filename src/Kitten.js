//
const mongoose = require('mongoose');
const yaml = require('yamljs');
const CatsModel = require('./src/models/cats');



class Kitten{


	constructor() {

		catsModel = new CatsModel();

	}


	addKitten(name, color, quality1, quality2, defaults, bestFood, available) {

		catsModel.create({

			name: name,
			color: color,
			quality1: quality1,
			quality2: quality2,
			defaults: defaults,
			bestFood: bestFood,
			available: available

		});
	}

	findKitten(name, color) {

		catsModel.findOne({

			name: name,
			color: color

		}).then(

			result => console.log(result)
			).catch( e => console.log(e.message));

	}



	findKittens() {

		catsModel.find().then(

			results => console.log(results)

			).catch( e => console.log(e.message));



	}


	// param -> true || false
	kittensAdopt(param) {

		catsModel.findOne({

			available: param

		}).then(

			results => console.log(results)

		).catch( e => console.log(e.message));


	}

/*
	updateKitten(name, ) {

		catsModel.findOne({

			name: name;

		}).then(

			color = this.color)

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

		catsModel.findOne({

			name: name,
			color: color
		}).then(

			result => {
				catsModel.remove({name: result.name}).then(

					result => console.log(result)
					).catch( e => console.log(e.message));
			});
	}


}


