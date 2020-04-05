let tasks = require('./data').tasks;
const Task = require('./task.model');

const getAll = async boardId => {
  return tasks.filter(task => task.boardId === boardId);
};

const getTaskById = async (boardId, taskId) => {
  return tasks.find(task => task.boardId === boardId && task.id === taskId);
};

const createTask = async (boardId, task) => {
  const newTask = new Task({ ...task, boardId });
  tasks.push(newTask);
  return newTask;
};

const updateTask = async (boardId, taskId, task) => {
  const updTask = tasks.find(
    item => item.boardId === boardId && item.id === taskId
  );
  updTask.order = task.order;
  updTask.columnId = task.columnId;
  updTask.description = task.description;
  updTask.title = task.title;
  updTask.userId = task.userIdl;
  return updTask;
};

const deleteTask = async (boardId, taskId) => {
  tasks = tasks.filter(task => task.boardId === boardId && task.id === taskId);
  return null;
};

const deleteTaskByDoard = async boardId => {
  tasks = tasks.filter(task => task.boardId === boardId);
  return null;
};

const nullUserInTask = async userId => {
  tasks = tasks.map(task => {
    if (task.userId === userId) {
      task.userId = null;
    }
    return task;
  });
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
