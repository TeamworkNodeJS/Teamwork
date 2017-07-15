/* eslint max-len: ["error", { "ignoreStrings": true }] */
const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/publications-controller')(data);

    router
        .get('/publications', (req, res) => {
            return controller.getAll(req, res);
        })
        .get('/publications/add-publication', (req, res) => {
            return res.render('forms/publication-form');
        })
        .get('/publications/latest', (req, res) => {
            return controller.getLatestPublications(req, res);
        })
        .get('/publications/:id', (req, res) => {
            return controller.getById(req, res);
        })
        .post('/publications', (req, res) => {
            return controller.create(req, res);
        })
        .get('/profile', (req, res) => {
            // const id = parseInt(req.params.id, 10);
            // const user = users.find((i) => i.id === id);
            // if (!user) {
            //     return res.status(404)
            //     .res.send('<h1>Error! Not found</h1>');
            // }
            return res.render('user/profile', {
                // model: user,
            });
        });

    app.use('/', router);
};

