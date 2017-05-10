import Connection from './Connection';
import Server from './Server';
import yaml from 'yamljs';
import path from 'path';
import Server from './Server';
import Kitten from './Kitten';


// c'est le dossier de config qu'on passe en parametre du contrcuteur
const config = yaml.load(path.join(__dirname, '../config/config.yml'));

//console.log(config);

const connection = new Connection();

connection.connect(config.default.db.ip_address,config.default.db.port,config.default.db.dbname)
	.then( res => {
		console.log("connected");
		
		const kitten = new Kitten();

		const server = new Server(3000, kitten);

		server.run();
		
		// console.log(cats);

		// cats.addKitten('boby2', 'green', 'doux', 'calin', 'timide', 'poulet', true);


	




	})
	.catch(e => console.log(e))
;






