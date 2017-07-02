const express = require('express');

const app = express();

const data = require('./app/data');
require('./app/config/app-config')(app);
require('./app/config/auth-config')(app, data);

require('./app/routes/server-routes')(app);
require('./app/routes/auth-routes')(app);

module.exports = app;
