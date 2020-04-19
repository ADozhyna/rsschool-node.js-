// const users = require('./data').users;
const User = require('./user.model');
// const taskservice = require('../tasks/task.service');

const getAll = async () => {
  return User.find({});
};

const getUserById = async id => {
  return User.findById(id);
};

const createUser = async user => {
  return User.create(user);
};

const updateUser = async (id, user) => {
  return User.updateOne({ _id: id }, user);
};

const deleteUser = async id => {
  return User.deleteOne({ _id: id });
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
