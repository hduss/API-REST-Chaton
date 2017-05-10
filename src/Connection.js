
import mongoose from 'mongoose';

mongoose.promise = global.Promise;

export default class Connection {

	constructor(config) {


		this.config = config;

		mongoose.connect(`mongodb://${this.config.default.db.ip_address}:${this.config.default.db.port}/${this.config.default.db.dbname}`, (err) => {

				if (err) {

					throw new Error();
				}



			console.log('Connected !!!');
		});
		

	}
}

