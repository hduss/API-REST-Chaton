module.exports = (app) => {
    const kittens = require('../controllers/kittensControllers');

    //Routes
    app.route('/kittens')
        .get(kittens.listAll)
        .post(kittens.addKitten);

    app.route('/kittens/:id')
        .get(kittens.getOne)
        .put(kittens.updateKitten)
        .delete(kittens.deleteKitten);
};
