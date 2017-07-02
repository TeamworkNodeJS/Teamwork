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
    .get('/adventures', (req, res) => {
        res.render('post-views/adventures');
    })
    .get('/post', (req, res) => {
        res.render('post-views/post');
    })
    .get('/contact', (req, res) => {
        res.render('forms/contact-form');
    });

    app.use('/', router);
};

module.exports = attatch;
