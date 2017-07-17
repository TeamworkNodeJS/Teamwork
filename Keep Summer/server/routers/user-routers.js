const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();

    router
        .get('/profile', (req, res) => {
            // const id = parseInt(req.params.id, 10);
            // const user = users.find((i) => i.id === id);
            // if (!user) {
            //     return res.status(404)
            //     .res.send('<h1>Error! Not found</h1>');
            // }
            return res.render('user/profile', {
                // model: user,
            });
        });

    app.use('/', router);
};
