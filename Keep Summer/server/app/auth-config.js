const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const { Strategie } = require('passport-local');

const init = (app, data) => {
   // passport.use(new Strategie());

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
         'extended': true, resave: true, saveUninitialize: true,
        }));
    app.use(session({ secret: 'pink cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = init;
