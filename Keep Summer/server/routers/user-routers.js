const { Router } = require('express');
const auth = require('../utilities/authinticated');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/user-controller')(data);

    router
        .get('/profile', (req, res) => {
            return controller.getUserProfile(req, res);
        })
        .get('/favourites', (req, res) => {
            return controller.getUserFavourites(req, res);
        })
        .post('/favourites', (req, res) => {
            return controller.addUserFavourites(req, res);
        })
        .put('/removefavourites', (req, res) => {
            return controller.removeUserFavourites(req, res);
        });

    app.use('/user', router);
};
