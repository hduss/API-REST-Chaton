import express from 'express';
import mongoose from 'mongoose';
import loadJsonFile  from 'load-json-file';
import routes from './api/routes/kittensRoutes';
import Kitten from './api/models/kittensModel';
import bodyParser from 'body-parser';
import twig from 'twig';
import path from 'path';

//get config file
const file = path.join(__dirname, '../config/config.json');

//launch express
const app = express();
const port = process.env.PORT || 3000;

//connect to db
mongoose.Promise = global.Promise;

const connect = (ip, port, db) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://${ip}:${port}/${db}`, err => {
            if(err){reject(err); return}
            resolve(true);
        })
    })
}

loadJsonFile(file)
    .then(config => {
        connect(config.db.mongodb.ip, config.db.mongodb.port, config.db.mongodb.base)
            .then(response => {
                console.log('Connected to Mongo DB');

                //use body parser
                app.use(bodyParser.urlencoded({ extended: true }));
                app.use(bodyParser.json());

                //add public repository
                app.use(express.static(path.join(__dirname, '../public')));

                //route app
                routes(app);

                //handle 404
                app.use((req, res) => {
                    res.status(404).send({url: req.originalUrl + ' not found'})
                });

                app.listen(port, () => {
                    console.log(`Kittens RESTful API server started on: ${port}`);
                });

            })
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e))
;