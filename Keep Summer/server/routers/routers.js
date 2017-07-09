/* globals __dirname */

const fs = require('fs');
const path = require('path');
const passport = require('passport');

const attachTo = (app, data) => {
    const controller = require('../controllers/publications-controller')(data);
    app.get('/', (req, res) => {
        return res.render('home/home');
    });

    app.get('/home', (req, res) => {
        return res.render('home/home');
    });

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

    app.get('/contact', (req, res) => {
        return res.render('forms/contact-form');
    });

    app.get('/publications', (req, res) => {
        return controller.getAll(req, res);
    });

    app.get('/publications/add-publication', (req, res) => {
        return res.render('forms/publication-form');
    });

    app.get('/publications/:id', (req, res) => {
        return controller.getById(req, res);
    });

    app.post('/publications', (req, res) => {
        const publication = req.body;

        return data.publications.create(publication)
            .then((dbPublication) => {
                return res.redirect('/publications');
            })
            .catch((err) => {
                // connect-flash
                req.flash('error', err);
                return res.redirect('/home');
            });

        // res.render('publication-views/publication', {
        //     model: publication,
        // });
    });

    app.get('/profile', (req, res) => {
        // const id = parseInt(req.params.id, 10);
        // const user = users.find((i) => i.id === id);
        // if (!user) {
        //     return res.status(404)
        //     .res.send('<h1>Error! Not found</h1>');
        // }
        return res.render('/profile', {
            // model: user,
        });
    });

    // fs.readdirSync(__dirname)
    //     .filter((file) => file.includes('.router'))
    //     .forEach((file) => {
    //         const modulePath = path.join(__dirname, file);
    //         require(modulePath).attachTo(app, data);
    //     });
};

module.exports = { attachTo };
