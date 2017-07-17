/* globals __dirname */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');
const $ = require('jQuery');
const favicon = require('serve-favicon');

const init = (data) => {
    const app = express();

    app.set('view engine', 'pug');

    app.use(morgan('combined'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    app.use(favicon(path.join(__dirname, '../../public/images', 'favicon.ico')));
    app.use('/libs', express.static(path.join(__dirname, '../../node_modules')));
    app.use('/static', express.static(path.join(__dirname, '../../public')));

    app.use(require('connect-flash')());
    app.use((req, res, next) => {
        res.locals.messages = require('express-messages')(req, res);
        next();
    });

    require('./auth').init(app, data);
    require('../routers').attach(app, data);

    app.all('*', (req, res) => {
        res.status(404);
        res.render('errors/not-found');
    });

    return Promise.resolve(app);
};

module.exports = { init };
