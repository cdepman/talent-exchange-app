path = require('path');
mongoose = require('mongoose');
Org = require('../models/orgs');


// var newOrg = new Org();

// newOrg.org.name    = 'Moringa School'; 
// newOrg.org.location = 'Nairobi, Kenya'; 
// newOrg.org.status  = 'Accepting Applications'; 
// newOrg.org.time  = 'Flexible'; 
// newOrg.org.exchange = 'Airfare, Room and Board';
// newOrg.org.stack = 'Ruby on Rails, Android';
// newOrg.org.email = 'Airfare, Room and Board';

// newOrg.save(function(err) {
//     if (err)
//         throw err;
// });


module.exports = function(app, passport){

  app.get('/login', function(req, res){
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.get('/signup', function(req, res){
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/content',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/content',
    failureRedirect : '/login',
    failureFlash : true
  }));

  app.get('/content', isLoggedIn, function(req, res){
    res.sendfile(path.resolve('./private/index.html'));
  });  

  app.get('/privatejs/*', isLoggedIn, function(req, res){
    res.sendfile(path.resolve(path.resolve('./private/' + req.url)));
  });

  app.get('/private/orgs', isLoggedIn, function(req, res){
    Org.find(function(err, orgs){
      if (err){console.log(err)}
      res.json(orgs);
    });
  });

  app.get('/auth/github', passport.authenticate('github', { scope : 'email' }));

  // handle the callback after github has authenticated the user
  app.get('/auth/github/callback',
      passport.authenticate('github', {
          successRedirect : '/content',
          failureRedirect : '/'
  }));

  // route for logging out
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  app.get('*', function(req, res) {
        res.sendfile('../public/index.html');
    });

};

// log-in checker middlware
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }

  res.redirect('/');
};