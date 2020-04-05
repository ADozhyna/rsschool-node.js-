const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const addTask = (boardId, task) => tasksRepo.createTask(boardId, task);
const getTask = (boardId, taskId) => tasksRepo.getTaskById(boardId, taskId);
const updTask = (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);
const delTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);
const deleteByboard = boardId => tasksRepo.deleteTaskByDoard(boardId);
const nullUser = userId => tasksRepo.nullUserInTask(userId);

module.exports = {
  getAll,
  addTask,
  getTask,
  updTask,
  delTask,
  nullUser,
  deleteByboard
};
