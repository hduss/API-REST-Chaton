module.exports = (app) => {
    const kittens = require('../controllers/kittensControllers');

    //Routes
    app.route('/')
        .get(kittens.listAll)

    app.route('/add')
        .post(kittens.addKitten);

    app.route('/kittens/:id')
        .get(kittens.getOne)
        .put(kittens.updateKitten)
        .delete(kittens.deleteKitten);
};
