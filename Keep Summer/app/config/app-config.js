/* globals __dirname */

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const configApp = (app) => {
    app.use(morgan('conbined'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use('/static', favicon(__dirname + '../../public'));
    app.use('/static', express.static(path.join(__dirname, '../../public')));
   app.use('/libs', express.static(path.join(__dirname, '../../node_modules')));

    app.set('view engine', 'pug');
};

module.exports = configApp;
