const Board = require('./board.model');
// const taskService = require('../tasks/task.service');

const getAll = async () => {
  return Board.find({});
};

const getBoardById = async id => {
  return Board.findById(id);
};

const createBoard = async board => {
  return Board.create(board);
};

const updateBoard = async (id, board) => {
  return Board.updateOne({ _id: id }, board);
};

const deleteBoard = async id => {
  return Board.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
