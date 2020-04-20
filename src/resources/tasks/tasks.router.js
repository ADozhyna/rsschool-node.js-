const router = require('express').Router();
const tasksService = require('./task.service');
const createError = require('http-errors');
const errorHandler = require('../../common/errors');
const Task = require('./task.model');

router.route('/').get(
  errorHandler(async (req, res) => {
    const tasks = await tasksService.getAll(req.boardId);
    return res.status(200).json(tasks.map(Task.toResponse));
  })
);

router.route('/:id').get(
  errorHandler(async (req, res) => {
    const task = await tasksService.getTask(req.boardId, req.params.id);
    console.log(task);
    if (!task) {
      throw createError(404, 'Task not found');
    }
    return res.status(200).json(Task.toResponse(task));
  })
);

router.route('/').post(
  errorHandler(async (req, res) => {
    const task = await tasksService.addTask(req.boardId, req.body);
    return res.status(200).json(Task.toResponse(task));
  })
);

router.route('/:id').put(
  errorHandler(async (req, res) => {
    const task = await tasksService.updTask(
      req.boardId,
      req.params.id,
      req.body
    );
    return res.status(200).json(Task.toResponse(task));
  })
);

router.route('/:id').delete(
  errorHandler(async (req, res) => {
    await tasksService.delTask(req.params.id);
    return res.status(204).json({ message: 'The user has been deleted' });
  })
);

module.exports = router;
