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