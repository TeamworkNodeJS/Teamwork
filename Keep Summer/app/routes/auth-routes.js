const { Router } = require('express');
const passport = require('passport');

const attatch = (app) => {
    const router = new Router();

    router
        .get('/signin', (req, res) => {
            res.render('forms/signin-form');
        })
        .get('/register', (req, res) => {
            res.render('forms/register-form');
        })
        .post('/sign-in', passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/forms/signin-form',
            failureFlash: true,
        }))
        .get('/sign-out', (req, res) => {
            req.logout();
            res.redirect('/');
        });

    app.use('/', router);
};

module.exports = attatch;
