import twig from 'twig';
import Kitten from './../Kitten';


export default class KittensCtrl {
    constructor(kitten) {
        this.kitten = kitten;

        }


    findKittens(req, res) {
        const kittens = this.kitten.findKittens();
        kittens
            .then(result => {
                res.render('index.twig', {
                    kittens: result
                });
            })
            .catch(e => console.log(e))
        ;
        
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