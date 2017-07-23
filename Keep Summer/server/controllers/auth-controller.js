const moment = require('moment');
const encryption = require('../utilities/encryption');

module.exports = function(data) {
    return {
        getLoginForm(req, res) {
            return res.render('forms/signin-form');
        },
        getRegisterForm(req, res) {
            return res.render('forms/register-form');
        },
        signUp(req, res) {
            // const user = req.body;

            const user = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                publications: [],
                favourites: [],
                date: moment().format('LL'),
            };

            const patternPassword =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (!patternPassword.test(req.body.password)) {
                res.status(401);
                req.flash('error', `Password must be between
                6 and 16 symbols long, must have at least one number
                and at least one special character`);
                return;
            }

            if (req.body.password !== req.body.confirmpassword) {
                res.status(401);
               req.flash('error', 'Please confirm password correctly.');
               return;
            }

            const patternEmail = /^\w.+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
            if (!patternEmail.test(req.body.email)) {
                res.status(401);
               req.flash('error', `Email can contain latin letters,
                numbers, _ and .`);
                return;
            }

            const patternName = /^[a-zA-Z0-9]{2,40}$/;
            if (!patternName.test(req.body.username)) {
                res.status(401);
                req.flash('error', `Name must contain only alphanumetrical 
                symbols and must be between 2 and 40 symbols long.`);
                return;
            }

            const salt = encryption.generateSalt();
            const passHash = encryption
            .generateHashedPassword(salt, user.password);

            data.users.findByUsername(user.username)
            .then((userByName) => {
                if (userByName) {
                    throw new Error('User already exists');
                }
                return data.users.create(user);
            })
            .then((userByName) => {
                return res.redirect('/login');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/register');
            });
        },
    };
};
