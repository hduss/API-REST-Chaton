import express from 'express';
import mongoose from 'mongoose';
import routes from './api/routes/kittensRoutes';
import Kitten from './api/models/kittensModel';
import bodyParser from 'body-parser';
import twig from 'twig';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Kittens')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add public repository
app.use(express.static(path.join(__dirname, '../public')));


routes(app);

//404
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`Kittens RESTful API server started on: ${port}`);