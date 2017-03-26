var _ = require('lodash');

module.exports = function(app) {

  _cats = [];

  //create
  app.post('/cat', function(req, res) {
    _cats.push(req.body);
    
    res.json({info: 'cat created successfully'});
  });

  //read
  app.get('/cat', function(req, res) {
    res.send(_cats);
  });

  //read
  app.get('/cat/:id', function(req, res) {
    res.send(_.find(_cats,{name: req.params.id}));
  });

  //update
  app.put('/cat/:id', function(req, res) {
    var index = _.findIndex(_cats, {name: req.params.id});
    _.merge(_cats[index], req.body);
    res.json({info: 'cat updated successfully'});
  });

  //delete
  app.delete('/cat/:id', function(req, res) {
    _.remove(_cats, function(cat) {
      return cat.name === req.params.id;
    });
    res.json({info: 'cat removed successfully'});
  });

};