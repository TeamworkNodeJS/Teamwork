const request = require('supertest');

describe('/publications tests', () => {
   let app = null;
    const data = {
        publications: {
            getAll(){
                return Promise.resolve([]);
            },
        }
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

    /*describe('POST /publications', () => {
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
    */

    describe('GET /form tests', () => {
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

    // describe('GET /form tests', () => {
    //     it('expect to receive 200 if user is loged in', (done) => {
    //         app.use(function(req, res, next) {
    //             req.isAuthenticated = function() {
    //                 return true;
    //             };
    //             req.user = {};
    //             next();
    //         });
    //         request(app)
    //             .get('/publications/form')
    //             .expect(200)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return done(err);
    //                 }

    //                 return done();
    //             });
    //     });
    // });
});
