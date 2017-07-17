/* eslint max-len: ["error", { "ignoreStrings": true }] */
const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/publications-controller')(data);

    router
        .get('/', (req, res) => {
            return controller.getAll(req, res);
        })
        .get('/add-publication', (req, res) => {
            return res.render('forms/publication-form');
        })
        .get('/latest', (req, res) => {
            return controller.getLatestPublications(req, res);
        })
        .get('/:id', (req, res) => {
            return controller.getById(req, res);
        })
        .post('/', (req, res) => {
            return controller.create(req, res);
        });

    app.use('/publications', router);
};

