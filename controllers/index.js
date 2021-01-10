exports.index = function(req, res, next) {
  // name of the template , data
  res.render('index', { title: 'Express' });
}