exports.get_landing = function(req, res, next) {
  // name of the template , data
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
  console.log('lead email: ', req.body.lead_email);
  res.redirect('/');
}