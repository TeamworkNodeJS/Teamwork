const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const { Strategie } = require('passport-local');

const hashPass = (password) => {
    return '';
};

const { MongoClient } = require('mongodb');
const MongoStore = require('connect-mongo')(session);

const init = (app, data) => {
    // must be always on the top
    passport.use(new Strategie());

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        'extended': true,
        resave: true,
        saveUninitialize: true,
    }));
    app.use(session({
        secret: 'pink cat',
        maxAge: new Date(Date.now() + 60 * 60 * 1000 ),
        store: new MongoStore(
            { db },
            (err) => {
                console.log(err || 'connect to mongodb')
            }),
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        return data.users.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch(done);
    });
};

module.exports = init;
