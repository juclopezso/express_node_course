exports.get_landing = function(req, res, next) {
  // name of the template , data
  res.render('landing', { title: 'Express' });
}