/* eslint max-len: ["error", { "ignoreStrings": true }] */
const { Router } = require('express');
const auth = require('../utilities/authinticated');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/publications-controller')(data);

    router
        .get('/', (req, res) => {
            return controller.getAll(req, res);
        })
        .get('/form', auth.isAuthenticated, (req, res) => { // could be useed by post comments too
            return controller.getPublicationForm(req, res);
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

