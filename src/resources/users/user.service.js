const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUserById(id);
const addNewUser = user => usersRepo.createUser(user);
const updUser = (id, user) => usersRepo.updateUser(id, user);
const delUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, addNewUser, updUser, delUser };
