module.exports = function(app, passport){

  // main index
  // app.get('/', function(req, res){
  //   res.render('index.ejs');
  // });

  // app.get('/login', function(req, res){
  //   res.render('login.ejs', { message: req.flash('loginMessage') });
  // });

  // app.get('/signup', function(req, res){
  //   res.render('signup.ejs', { message: req.flash('signupMessage') });
  // });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true
  }));

  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', {
      user: req.user
    });
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/github', passport.authenticate('github', { scope : 'email' }));

  // handle the callback after github has authenticated the user
  app.get('/auth/github/callback',
      passport.authenticate('github', {
          successRedirect : '/profile',
          failureRedirect : '/'
  }));

  // route for logging out
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  // app.get('/user/*', function(req, res) {
  //       res.sendfile('./client/index.html'); // load our public/index.html file
  //   });

};

// log-in checker middlware
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }

  res.redirect('/');
};