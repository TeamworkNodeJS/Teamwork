// https://gist.github.com/jeshuamaxey/e88a21f802445bf05e18 
//http://www.alexjamesbrown.com/blog/development/stubbing-middleware-testing-express-supertest/
//https://github.com/alexjamesbrown/supertest-stubbing-middleware/blob/f63be40cc4f0334efd80576d5ff0499cb918d394/test/test.js

/*
let User = require('../../server/models/user-model');
let request = require('supertest');
const { init } = require('../../server/config');


describe('User API:', function() {
  let user;
  let app = null;
    const data = {
        publications: {
            getAll(){
                return Promise.resolve([]);
            },
        }
    };

  // Clear users before testing
  before(function(done) {
     init(data)
            .then((_app) => {
                app = _app;
            });


    User.remove(function() {
      user = new User({
        name: 'Fake User',
        email: 'test@test.com',
        password: 'password'
      });



      user.save(function(err) {
        if (err) return done(err);
        done();
      });
    });
    
  });



  // Clear users after testing
after(function() {
    return User.remove().exec();
  });


 describe('GET /user/profile', function() {
    let token;

    before(function(done) {
      request(app)
        .post('/login')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          token = res.body.token;
          done();
        });
    });

    it('should respond with a user profile when authenticated', function(done) {
      request(app)
        .get('/user/profile')
        .set('authorization', 'Bearer ' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          res.body._id.should.equal(user._id.toString());
          done();
        });
    });

    it('should respond with a 401 when not authenticated', function(done) {
      request(app)
        .get('/user/profile')
        .expect(401)
        .end(done);
    });
  });
});
*/