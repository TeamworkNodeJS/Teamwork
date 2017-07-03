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
    .get('/all-publications', (req, res) => {
        res.render('publication-views/all-publications');
    })
    .get('/publication', (req, res) => {
        res.render('publication-views/publication');
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
