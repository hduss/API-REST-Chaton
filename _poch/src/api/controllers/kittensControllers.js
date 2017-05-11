import mongoose from 'mongoose';

const Kitten = mongoose.model('Kittens');

exports.listAll = (req, res) => {
    Kitten.find({}, (err, kittens) => {
        if (err)
            res.send(err);
        res.render('index.twig',{
            kittens: kittens
        });
    });
};

exports.getAll = (req, res) => {
    Kitten.find({}, (err, kittens) => {
        if (err)
            res.send(err);
        res.json(kittens);
    });
};

exports.addKitten = (req, res) => {
    const newKitten = new Kitten(req.body);
    newKitten.save((err, kitten) => {
        if (err)
            res.send(err);
        res.json(kitten);
    });
};


exports.getOne = (req, res) => {
    Kitten.findById(req.params.id, (err, kitten) => {
        if (err)
            res.send(err);
        res.json(kitten);
    });
};


exports.updateKitten = (req, res) => {
    Kitten.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, kitten) => {
        if (err)
            res.send(err);
        res.json(kitten);
    });
};


exports.deleteKitten = (req, res) => {
    Kitten.remove({
        _id: req.params.id
    }, function(err, kitten) {
        if (err)
            res.send(err);
        res.json({ message: 'Kitten successfully deleted' });
    });
};