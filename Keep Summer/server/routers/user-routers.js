const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/user-controller')(data);

    router
        .get('/profile', (req, res) => {
            return controller.getUserProfile(req, res);
        });

    app.use('/', router);
};
