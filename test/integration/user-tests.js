const request = require('supertest');
const server = request.agent('http://localhost:80');

describe('GET /user/profile', function() {
  it('login', loginUser());
  it('expect user/profile to return 200', function(done) {
    server
      .get('/user/profile')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        // console.log(res.body);
        return done();
      });
  });
  it('expect user/favourites to return 200', function(done) {
    server
      .get('/user/favourites')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        // console.log(res.body);
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
      .expect('Location', '/')
      .end(onResponse);

    function onResponse(err, res) {
      if (err) return done(err);
      return done();
    }
  };
};