const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local');

const MongoStore = require('connect-mongo')(session);

const init = (app, { users }) => {
    // must be always on the top
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    },
    (username, password, done) =>{
        return users.findByUsername(username)
            .then((user) => {
                if (!user) {
                    return done(null, false);
                }
                if (user.password !== password) {
                    return done(null, false);
                }
                return done(null, user);
            });
    }));

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({
        'extended': true,
    }));
    app.use(session({
        secret: 'pink cat',
        resave: true,
        saveUninitialize: true,
        // maxAge: new Date(Date.now() + 60 * 60 * 1000 ),
        // store: new MongoStore(),
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        return users.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch(done);
    });
};

module.exports = { init };
