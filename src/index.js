import Connection from './Connection';
import yaml from 'yamljs';
import path from 'path';

const config = yaml.load(path.join(__dirname, '../config/config.yml'));

console.log(config);

const connect = new Connection(config);

