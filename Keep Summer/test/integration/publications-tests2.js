const request = require('supertest');

describe('/piblications tests', () => {
    //const connectionString = 'mongodb://localhost/items-db-test';
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
});
