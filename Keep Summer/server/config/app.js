/* globals __dirname */
/* eslint max-len: ["error", { "ignoreStrings": true }] */

const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const $ = require('jQuery');
const favicon = require('serve-favicon');

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Strategie } = require('passport-local');

const init = (data) => {
    const app = express();

    app.set('view engine', 'pug');

    app.use(morgan('combined'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    // passport.use(new Strategie());
    app.use(bodyParser.urlencoded({
         'extended': true, resave: true, saveUninitialize: true,
        }));
    // app.use(session({ secret: 'pink cat' }));
    app.use(passport.initialize());
    app.use(passport.session());

    // app.use('/static', favicon(__dirname + '/public/img/favicon.ico'));
    app.use('/libs', express.static(path.join(__dirname, '../../node_modules')));
    app.use('/static', express.static(path.join(__dirname, '../../public')));

    // app.use(cookieParser('keyboard cat'));
    // app.use(session({ cookie: { maxAge: 60000 } }));


    app.use(require('connect-flash')());
    app.use((req, res, next) => {
        res.locals.messages = require('express-messages')(req, res);
        next();
    });

    require('../routers').attach(app, data);

    return Promise.resolve(app);
};

module.exports = { init };
