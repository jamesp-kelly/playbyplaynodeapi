var r = require('request').defaults({
  json: true
});

module.exports = function(app) {

  // read
  app.get('/pets', function(req, res) {
    r({uri: 'http://localhost:3001/dog'}, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json(body);
      } else {
        res.send(response.statusCode);
      }
    });


    //Error: Can't set headers after they are sent.

    // r({uri: 'http://localhost:3000/cat'}, function(error, response, body) {
    //   if (!error && response.statusCode === 200) {
    //     res.json(body);
    //   } else {
    //     res.send(response.statusCode);
    //   }
    // });
  });
};