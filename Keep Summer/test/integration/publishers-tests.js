const request = require('supertest');
const { init } = require('../../server/config');

describe('/publications tests', () => {
   /*let app = null;
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
        */

    describe('GET /publishers ', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/publishers')
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