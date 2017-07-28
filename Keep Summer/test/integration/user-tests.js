/* const request = require('supertest');
const { init } = require('../../server/config');

describe('/user tests', () => {
   let app = null;
    const data = {
        publications: {
            getAll(){
                return Promise.resolve([]);
            },
        },
    };

    beforeEach(() => {
            init(data)
            .then((_app) => {
                app = _app;
            });
    });

    describe('GET /profile', () => {
        it('expect to return 200', (done) => {
            request(app)
                .get('/user/profile')
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
*/
