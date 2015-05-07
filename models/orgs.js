var mongoose = require('mongoose');

// model schema
var orgSchema = mongoose.Schema({
  org   : {
      name            : String,
      location        : String,
      status          : String,
      time            : String,
      exchange        : String,
      stack           : String,
      email           : String
  }
});

module.exports = mongoose.model('Org', orgSchema);