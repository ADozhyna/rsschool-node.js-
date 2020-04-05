let boards = require('./data').boards;
const Board = require('./board.model');
const taskService = require('../tasks/task.service');

const getAll = async () => {
  return boards;
};

const getBoardById = async id => {
  return boards.find(board => board.id === id);
};

const createBoard = async board => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const updateBoard = async (id, board) => {
  const updBoard = boards.find(item => item.id === id);
  updBoard.title = board.title;
  updBoard.columns = board.columns;
  return updBoard;
};

const deleteBoard = async id => {
  boards = boards.filter(board => board.id !== id);
  taskService.deleteByboard(id);
  return null;
};

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
