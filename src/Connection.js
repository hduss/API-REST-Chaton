
import mongoose from 'mongoose';

mongoose.promise = global.Promise;

export default class Connection {

	// on passe en parametre un dossier de config


	connect(ip, port, db){
			return new Promise((resolve, reject) => {
			mongoose.connect(`mongodb://${ip}:${port}/${db}`, (err) => {
				if (err) {reject(err); return}
				resolve(true);
			});
		});
	}
}

