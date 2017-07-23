const { Router } = require('express');

module.exports = function(app, data) {
    const router = new Router();
    const controller = require('../controllers/user-controller')(data);

    router
        .get('/profile', (req, res) => {
            return controller.getUserProfile(req, res);
        });
        // .get('/favourites', (req, res) => {
        //     return '';
        // })
        // .post('favourites', (req, res)=>{
        //     return '';
        // })
        // .post('likes', (req, res)=>{
        //     return '';
        // })
        // .post('dislikes', (req, res)=>{
        //     return '';
        // });

    app.use('/user', router);
};
