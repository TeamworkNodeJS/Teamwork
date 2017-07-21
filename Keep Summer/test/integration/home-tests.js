const request = require('supertest');
const { init } = require('../../server/config');

describe('/ tests', () => {
    describe('GET /home tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/home')
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

    describe('GET /contact-form tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/contact')
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
});


