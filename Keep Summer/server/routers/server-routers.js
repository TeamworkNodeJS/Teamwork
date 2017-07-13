const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();

    router
        .get('/', (req, res) => {
            return res.render('home/home');
        })
        .get('/home', (req, res) => {
            return res.render('home/home');
        })
        .get('/contact', (req, res) => {
            return res.render('forms/contact-form');
        });

    app.use('/', router);
};

