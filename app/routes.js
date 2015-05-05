module.exports = function(app, passport){

  // main index
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  // login form
  app.get('/login', function(req, res){
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.get('/signup', function(req, res){
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // app.post('/signup', passportshit);

  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', {
      user: req.user
    });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

};


// log-in checker middlware
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }

  res.redirect('/');
};