let users = require('./data').users;
const User = require('./user.model');

const getAll = async () => {
  return users;
};

const getUserById = async id => {
  return users.find(user => user.id === id);
};

const createUser = async user => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const updateUser = async (id, user) => {
  const updUser = users.find(item => item.id === id);
  updUser.name = user.name;
  updUser.login = user.login;
  updUser.password = user.password;
  return updUser;
};

const deleteUser = async id => {
  users = users.filter(user => user.id !== id);
  return null;
};

module.exports = { getAll, getUserById, createUser, updateUser, deleteUser };
