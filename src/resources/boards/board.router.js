const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.status(200).json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getBoard(req.params.id);
  if (!board) {
    res.status(404).json({ message: 'board not found' });
  }
  res.status(200).json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.addBoard(req.body);
  res.status(200).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.updateBoard(req.params.id, req.body);
  if (!board) {
    res.status(400).json({ message: 'bad request' });
  }
  res.status(200).json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.delBoard(req.params.id);
  res.status(204).json({ message: 'The board has been deleted' });
});

module.exports = router;
