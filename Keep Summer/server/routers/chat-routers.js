const { Router } = require('express');
const auth = require('../utilities/authinticated');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/chat-controller')(data);

    router
        .get('/chat', (req, res) => {
            return controller.openChat(req, res);
        });
    app.use('/', router);
};