const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 phone: {
  type: String,
  required: true
 },
 active: {
  type: Boolean,
  required: true
 }
});


module.exports = mongoose.model('User', UserSchema);