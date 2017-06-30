const { Router } = require('express');

const attatch = (app) => {
    const router = new Router();

    router
    .get('/signin', (req, res) => {
        res.render('forms/signin-form');
    })
    .get('/register', (req, res) => {
        res.render('forms/register-form');
    });

    app.use('/', router);
};

module.exports = attatch;
