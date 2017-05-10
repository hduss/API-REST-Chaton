import twig from 'twig';


export default class KittensCtrl {
    constructor() {
        this.twig = twig;

    }


    findKittens(req, res) {
        // importer class Théo + methods
        // const kitten = new Kitten()
        // const kittens = kitten.findKittens()
        // res.render('findKitten.twig', {
        //     kittens: kittens
        // });
        res.json({});
    }

    addKitten(req, res) {
        res.render('addKitten.twig', {
            kittens: kittens
        });
    }

    kittensAdopt(req, res) {
        res.render('kittensAdopt.twig', {
            kittens: kittens
        });
    }

    findKitten(req, res) {
        res.render('findKitten.twig', {
            kittens: kittens
        });
    }

    updateKitten(req, res) {
        res.render('updateKitten.twig', {
            kittens: kittens
        });
    }

    deleteKitten(req, res) {
        res.render('deleteKitten.twig', {
            kittens: kittens
        });
    }


}