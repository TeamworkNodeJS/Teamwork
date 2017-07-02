const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Strategie } = require('passport-local');

const configAuth = (app, data) => {
   // passport.use(new Strategie());

    app.use(cookieParser());
    app.use(session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = configAuth;