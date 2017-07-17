const passport = require('passport');
const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();

    router
        .get('/login', (req, res) => {
            return res.render('forms/signin-form');
        })
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true,
            })
        )
        .get('/register', (req, res) => {
            return res.render('forms/register-form');
        })
        .post('/register', (req, res) => {
            return '';
        })
        .get('/logout', (req, res) => {
            req.logout();
            return res.redirect('/');
        });

    app.use('/', router);
};

