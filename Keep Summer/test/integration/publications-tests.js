const request = require('supertest');

describe('/piblications tests', () => {
    const connectionString = 'mongodb://localhost/items-db-test';
    let app = null;

    beforeEach(() => {
        return Promise.resolve()
            .then(() => require('../../server/db').init(connectionString))
            .then((db) => require('../../server/data').init(db))
            .then((data) => require('../../server/config').init(data))
            .then((_app) => {
                app = _app;
            });
    });

    describe('GET /publications', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/publications')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });

    describe('GET /publications/:id', () => {
        it('expect to return 200', (done) => {
            const task = { };
            request(app)
                .get('/publications/' + task._id)
                .expect(500)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });

    describe('POST /publications', () => {
        it('expect to redirect to /publications', (done) => {
            request(app)
                .post('/publications')
                .send({
                    publication: {},
                    user: {},
                    publisher: {},
                })
                .expect(302)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });

    describe('GET /form tests', () => {
        it('expect to receive 302 if login', (done) => {
                    request(app)
                        .get('/publications/form')
                        .set('Authorization', 'Token token=sometoken')
                        // or .auth('user', 'password')
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
