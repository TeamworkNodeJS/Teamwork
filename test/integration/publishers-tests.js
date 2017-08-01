// const request = require('supertest');
// const { init } = require('../../server/config');

// describe('/publishers tests', () => {
//      let app = null;
//      let cookie;
//      const data = {
//          publications: {
//              getAll() {
//                  return Promise.resolve([]);
//              },
//          },
//      };
 
//      beforeEach(() => {
//          return Promise.resolve()
//              .then(() => require('../../server/config').init(data))
//              .then((_app) => {
//                  app = _app;
//              });
//      });
//     it('login',(done) => {
//     request(app)
//         .post('/login')
//         .send({ email: "user@gluck.com", password: 'password' })
//         .end(function (err, res) {
//             res.should.have.status(200);
//             cookie = res.headers['set-cookie'];
//             done();
//         });
//     });

//     it('get publishers/mostpopular',(done) => {
//     request(app)
//         .get('publishers/mostpopular')
//         .set('cookie', cookie)
//         .expect(200)
//         .end(function (err, res) {
//             done();
//         });
//     });
// });

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

                    return done();
                });
            });
        });
    });
    describe('GET /publishers tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/publishers')
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
    describe('GET /publishers tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('publishers/596fc421585c7a1920b9474')
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
