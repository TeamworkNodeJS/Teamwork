const passport = require('passport');

const attatchTo = (app, data) => {
        app.get('/signin', (req, res) => {
            return res.render('forms/signin-form');
        });

        app.get('/register', (req, res) => {
            return res.render('forms/register-form');
        });

        app.post('/sign-in', passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/forms/signin-form',
            failureFlash: true,
        }));

        app.get('/sign-out', (req, res) => {
            req.logout();
            return res.redirect('/');
        });
};

module.exports = { attatchTo };
