const Task = require('./task.model');

const getAll = async _boardId => {
  return Task.find({ boardId: _boardId });
};

const getTaskById = async (_boardId, taskId) => {
  return Task.findOne({ _id: taskId, boardId: _boardId });
};

const createTask = async (_boardId, task) => {
  return Task.create({ ...task, boardId: _boardId });
};

const updateTask = async (_boardId, taskId, task) => {
  return Task.updateOne({ _id: taskId, boardId: _boardId }, task);
};

const deleteTask = async taskId => {
  return Task.deleteOne({ _id: taskId });
};

const deleteTaskByDoard = async _boardId => {
  return Task.deleteMany({ boardId: _boardId });
};

const nullUserInTask = async _userId => {
  // console.log(Task.find({ userId: _userId }));
  return Task.updateMany({ userId: _userId }, { userId: null });
};

module.exports = {
  getAll,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  deleteTaskByDoard,
  nullUserInTask
};
