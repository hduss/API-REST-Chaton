import ejs from 'ejs';


export default class KittensCtrl {
    constructor() {
        this.ejs = ejs;

    }


    findKittens(req, res) {
        // importer class Théo + methods
        // const kitten = new Kitten()
        // const kittens = kitten.findKittens()
        res.render('findKitten.ejs', {
            kittens: kittens
        });
    }

    addKitten(req, res) {
        res.render('addKitten.ejs', {
            kittens: kittens
        });
    }

    kittensAdopt(req, res) {
        res.render('kittensAdopt.ejs', {
            kittens: kittens
        });
    }

    findKitten(req, res) {
        res.render('findKitten.ejs', {
            kittens: kittens
        });
    }

    updateKitten(req, res) {
        res.render('updateKitten.ejs', {
            kittens: kittens
        });
    }

    deleteKitten(req, res) {
        res.render('deleteKitten.ejs', {
            kittens: kittens
        });
    }


}