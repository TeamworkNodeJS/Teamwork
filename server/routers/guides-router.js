const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/guide-controller')(data);

    router
        .get('/', (req, res) => {
            return controller.getAll(req, res);
        })
        .get('/:id', (req, res) => {
            return controller.getById(req, res);
        });

    app.use('/guides', router);
};
