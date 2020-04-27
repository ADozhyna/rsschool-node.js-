const User = require('./user.model');

exports.users = [
  new User({
    name: 'Sam Winchester',
    login: 'Moose',
    password: 'admin'
  }),
  new User({
    name: 'Dean Winchester',
    login: 'Dean',
    password: 'password123'
  }),
  new User({
    name: 'user',
    login: 'admin',
    password: 'admin'
  })
];
