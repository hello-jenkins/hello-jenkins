var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('talks bla-bla-bla with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});
