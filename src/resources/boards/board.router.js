const router = require('express').Router();
const boardService = require('./board.service');
const taskRoute = require('../tasks/tasks.router');
const ValidationError = require('../../common/validation');
const createError = require('http-errors');
const errorHandler = require('../../common/errors');

router.route('/').get(
  errorHandler(async (req, res) => {
    const boards = await boardService.getAll();
    return res.status(200).json(boards);
  })
);

router.route('/:id').get(
  errorHandler(async (req, res) => {
    const board = await boardService.getBoard(req.params.id);
    console.log(board);
    if (!board) {
      throw createError(404, 'Board not found');
    }
    return res.status(200).json(board);
  })
);

router.route('/').post(
  errorHandler(async (req, res) => {
    const board = await boardService.addBoard(req.body);
    return res.status(200).json(board);
  })
);

router.route('/:id').put(
  errorHandler(async (req, res) => {
    const board = await boardService.updateBoard(req.params.id, req.body);
    if (!board) {
      throw createError(404, 'Board not found');
    }
    if (req.body.title === '' || req.body.columns === '') {
      const error = new ValidationError();
      throw error;
    }
    return res.status(200).json(board);
  })
);

router.route('/:id').delete(
  errorHandler(async (req, res) => {
    await boardService.delBoard(req.params.id);
    return res.status(204).json({ message: 'The board has been deleted' });
  })
);

router.use(
  '/:boardId/tasks',
  (req, res, next) => {
    req.boardId = req.params.boardId;
    next();
  },
  taskRoute
);

module.exports = router;
