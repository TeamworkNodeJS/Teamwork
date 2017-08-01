const request = require('supertest');
const { init } = require('../../server/config');
const server = request.agent('http://localhost:80');

describe('Test chat routers', function () {
    it('login', loginUser());
    it('expect to return 200 on /chat', function (done) {
        server
            .get('/chat')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                //  console.log(res.body);
                return done();
            });
    });
});


function loginUser() {
    return function (done) {
        server
            .post('/login')
            .send({ username: 'Darin96', password: 'darin96*' })
            .expect(302)
            .end(onResponse);

        function onResponse(err, res) {
            if (err) return done(err);
            return done();
        }
    };
};

