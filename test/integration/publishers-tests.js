const request = require('supertest');
const { init } = require('../../server/config');

describe('/ publisher-tests', () => {
    describe('GET /publishers tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
                .then((app) => {
                    request(app)
                        .get('/publishers/mostpopular')
                        .expect('Content-Type', /html/)
                        .end((err, res) => {
                            if (err) {
                                return done(err);
                            }
                        });
                });
        });
    });
});
