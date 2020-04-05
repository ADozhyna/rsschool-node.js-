const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const getBoard = id => boardRepo.getBoardById(id);
const addBoard = board => boardRepo.createBoard(board);
const updateBoard = (id, board) => boardRepo.updateBoard(id, board);
const delBoard = id => boardRepo.deleteBoard(id);

module.exports = { getAll, getBoard, addBoard, updateBoard, delBoard };
