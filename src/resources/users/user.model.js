const uuid = require('uuid');
const mongoose = require('mongoose');
const { genSalt, hash } = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  _id: {
    type: String,
    default: uuid
  }
});

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

/* eslint-disable */

userSchema.pre('save', function(next) {
  const user = this;
  const saltRounds = 10;

  if (user.isModified('password')) {
    genSalt(saltRounds, (err, salt) => {
      hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

/* eslint-enable */

const User = mongoose.model('User', userSchema);

module.exports = User;
