const passport = require('passport');
const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();

    router
        .get('/signin', (req, res) => {
            return res.render('forms/signin-form');
        })
        .get('/register', (req, res) => {
            return res.render('forms/register-form');
        }).post('/sign-in', passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/forms/signin-form',
            failureFlash: true,
        }))
        .get('/sign-out', (req, res) => {
            req.logout();
            return res.redirect('/');
        });

    app.use('/', router);
};

