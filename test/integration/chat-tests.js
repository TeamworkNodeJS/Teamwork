const request = require('supertest');
const { init } = require('../../server/config');

const user = {
    username: 'Darin96',
    password: 'darin96*',
}

describe('/ chat-tests', () => {
    describe('GET /chat tests', () => {
        it('expect to return 200', (done) => {
            const data = {};
            init(data)
            .then((app) => {
                request(app)
                .get('/chat')
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
