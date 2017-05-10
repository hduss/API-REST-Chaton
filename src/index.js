import Connection from './Connection';
import Server from './Server';
import yaml from 'yamljs';
import path from 'path';


import Kitten from './Kitten';




// c'est le dossier de config qu'on passe en parametre du contrcuteur
const config = yaml.load(path.join(__dirname, '../config/config.yml'));

//console.log(config);

const connection = new Connection();

connection.connect(config.default.db.ip_address,config.default.db.port,config.default.db.dbname)
	.then( res => {
		console.log("connected");


		const server = new Server(3000);
		server.run();
		// const cats = new Kitten();
		// console.log(cats);

		/*cats.addKitten('boby', 'blue', 'beau', 'doux', 'il mord', 'poisson grillé', true);


	
*/



	})
	.catch(e => console.log(e))
;






