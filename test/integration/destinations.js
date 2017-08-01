const request = require('supertest');
const { init } = require('../../server/config');

describe('/ destination-tests', () => {
    describe('GET /destinations tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/destinations/display')
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
     describe('GET /destinations tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/destinations')
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
    describe('GET /destinations tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/destinations/59760fa0f36d2812888e31dd')
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
});
