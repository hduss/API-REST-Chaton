import KittensCtrl from './Controllers/KittensCtrl';
import express from 'express';

export default class Server {
    constructor(port) {
        this.app = express();
        this.port = port;
        this.initController();
    }

    initController()
    {
        const kittensCtrl = new KittensCtrl();

        this.app.get('/kittens/', kittensCtrl.findKittens);
        this.app.post('/kittens/', kittensCtrl.addKitten);
        this.app.get('/kittens/:id', kittensCtrl.findKitten);
        this.app.put('/kittens/:id', kittensCtrl.updateKitten);
        this.app.delete('/kittens/:id', kittensCtrl.deleteKitten);
    }



    run() {
        this.app.listen(this.port, () => console.log(`Connected on: ${this.port}` ));
    }


}
