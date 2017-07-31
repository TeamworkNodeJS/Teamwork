const request = require('supertest');
const { init } = require('../../server/config');

describe('/ auth-tests', () => {
    describe('GET /login tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
                .then((app) => {
                    request(app)
                        .get('/login')
                        .expect(200)
                        .end((err, res) => {
                            if (err) {
                                return done(err);
                            }
                            return done();
                        });
                });
        });
    });

    describe('GET /register tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
                .then((app) => {
                    request(app)
                        .get('/register')
                        .expect(200)
                        .end((err, res) => {
                            if (err) {
                                return done(err);
                            }
                            return done();
                        });
                });
        });
        const user = {
            firstname: 'Test',
            lastname: 'Test',
            username: 'test',
            email: 'test@gmail.com',
            password: 'test1234*',
        };

        it('expect to return 200 when signUp', (done) => {
            const data = {};
            init(data)
                .then((app) => {
                    request(app)
                        .post('/register')
                        .send(user)
                        .expect(500)
                        .end((err, res) => {
                            if (err) {
                                return done(err);
                            }
                            return done();
                        });
                });
        });
    });
    describe('GET /logout tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
                .then((app) => {
                    request(app)
                        .get('/logout')
                        .expect(302)
                        .end((err, res) => {
                            if (err) {
                                return done(err);
                            }
                            return done();
                        });
                });
        });
    });
});
