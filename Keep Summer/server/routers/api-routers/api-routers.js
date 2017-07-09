/* eslint max-len: ["error", { "ignoreStrings": true }] */

const attatchTo = (app, data) => {
    const controller = require('../../controllers/publications-controller')(data);
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
};

module.exports = { attatchTo };
