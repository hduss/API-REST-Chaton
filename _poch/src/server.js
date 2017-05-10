import express from 'express';
import mongoose from 'mongoose';
import Kitten from './api/models/kittensModel';
import routes from './api/routes/kittensRoutes';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Kittens')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//404
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

routes(app);

app.listen(port);

console.log(`Kittens RESTful API server started on: ${port}`);