var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


// model schema
var userSchema = mongoose.Schema({
  local   : {
      email     : String,
      password  : String
  },
  github  : {
      id        : String,
      token     : String,
      email     : String,
      name      : String
  }
});

// methods
// generate a hash
userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);