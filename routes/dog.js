var _ = require('lodash');
var Dog = require('../models/dog');

module.exports = function(app) {


  //create
  app.post('/dog', function(req, res) {
    var newDog = new Dog(req.body);
    newDog.save(function(err) {
      if (err) {
        res.json({info: 'error during dog create', error: error});
      }
      res.json({info: 'dog created successfully'});
    });
  });

  //read
  app.get('/dog', function(req, res) {
    Dog.find(function(err, dogs) {
      if (err) {
        res.json({info: 'error during dog create', error: error});
      } else {
        //res.json({info: 'dog found successfully', data: dogs});
        setTimeout(function() {
          res.json({info: 'dog found successfully', data: dogs});
        }, 10000);
      }
    });
  });

  //read
  app.get('/dog/:id', function(req, res) {
    Dog.findById(req.params.id, function(err, dog) {
      if (err) {
        res.json({info: 'error during find dog', error: err});
      }
      if (dog) {
        res.json({info: 'dog found successfully', data: dog});
      } else {
        res.json({info: 'dog not found'});
      }
    });
  });

  //update
  app.put('/dog/:id', function(req, res) {
    Dog.findById(req.params.id, function(err, dog) {
      if (err) {
        res.json({info: 'error during find dog', error: err});
      } else {
        if (dog) {
          _.merge(dog, req.body);
          dog.save(function(err) {
            if (err) {
              res.json({info: 'error during dog update', error: err});
            } else {
              res.json({info: 'dog updated successfully'});
            }
          });
        } else {
          res.json({info: 'dog not found'});
        }
      }
    });
  });

  //delete
  app.delete('/dog/:id', function(req, res) {
    Dog.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({info: 'error during remove dog', error: err});
      } else {
        res.json({info: 'dog removed successfully'});
      }
    });
  });

}