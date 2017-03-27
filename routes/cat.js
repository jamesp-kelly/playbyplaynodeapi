var _ = require('lodash');
var Cat = require('../models/cat');

module.exports = function(app) {


  //create
  app.post('/cat', function(req, res) {
    var newCat = new Cat(req.body);
    newCat.save(function(err) {
      if (err) {
        res.json({info: 'error during cat create', error: error});
      }
      res.json({info: 'cat created successfully'});
    });
  });

  //read
  app.get('/cat', function(req, res) {
    Cat.find(function(err, cats) {
      if (err) {
        res.json({info: 'error during cat create', error: error});
      } else {
        res.json({info: 'cat found successfully', data: cats});
      }
    });
  });

  //read
  app.get('/cat/:id', function(req, res) {
    Cat.findById(req.params.id, function(err, cat) {
      if (err) {
        res.json({info: 'error during find cat', error: err});
      }
      if (cat) {
        res.json({info: 'cat found successfully', data: cat});
      } else {
        res.json({info: 'cat not found'});
      }
    });
  });

  //update
  app.put('/cat/:id', function(req, res) {
    Cat.findById(req.params.id, function(err, cat) {
      if (err) {
        res.json({info: 'error during find cat', error: err});
      } else {
        if (cat) {
          _.merge(cat, req.body);
          cat.save(function(err) {
            if (err) {
              res.json({info: 'error during cat update', error: err});
            } else {
              res.json({info: 'cat updated successfully'});
            }
          });
        } else {
          res.json({info: 'cat not found'});
        }
      }
    });
  });

  //delete
  app.delete('/cat/:id', function(req, res) {
    Cat.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({info: 'error during remove cat', error: err});
      } else {
        res.json({info: 'cat removed successfully'});
      }
    });
  });

}