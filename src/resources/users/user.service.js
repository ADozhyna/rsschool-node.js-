const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUserById(id);
const addNewUser = user => usersRepo.createUser(user);
const updUser = (id, user) => usersRepo.updateUser(id, user);
const delUser = id => {
  usersRepo.deleteUser(id);
  tasksService.nullUser(id);
};

module.exports = { getAll, getUser, addNewUser, updUser, delUser };
