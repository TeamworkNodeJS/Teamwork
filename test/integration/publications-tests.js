const request = require('supertest');

describe('/publications tests', () => {
   let app = null;
    const data = {
        publications: {
            getAll() {
                return Promise.resolve([]);
            },
        },
    };

    beforeEach(() => {
        return Promise.resolve()
            .then(() => require('../../server/config').init(data))
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
            const task = {};
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

    describe('GET /form', () => {
        it('expect to receive 302 with login', (done) => {
            request(app)
                .get('/publications/form')
                .expect(302)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });

     describe('GET /non-existing rout', () => {
        it('expect to receive error 404', (done) => {
            request(app)
                .get('/non-existing-page')
                .expect(404)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });

    describe('GET /publications', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/publications/latest')
                .expect('Content-Type', /html/)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });

    describe('GET /publications', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/publications/search')
                .expect('Content-Type', /html/)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    return done();
                });
        });
    });
});
