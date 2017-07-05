const { Router } = require('express');

const attatch = (app) => {
    const router = new Router();

    router
    .get('/', (req, res) => {
        res.render('home/home');
    })
    .get('/home', (req, res) => {
        res.render('home/home');
    })
    .get('/contact', (req, res) => {
        res.render('forms/contact-form');
    })
    .get('/add-publication', (req, res) => {
        res.render('forms/publication-form');
    });

    app.use('/', router);
};

module.exports = attatch;
