const router = require('express').Router();
// const User = require('./user.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.boardId);
  res.status(200).json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getTask(req.boardId, req.params.id);
  if (!task) {
    res.status(404).json({ message: 'task not found' });
  }
  res.status(200).json(task);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.addTask(req.boardId, req.body);
  res.status(200).json(task);
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.updTask(req.boardId, req.params.id, req.body);
  res.status(200).json(task);
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.delTask(req.boardId, req.params.id);
  res.status(204).json({ message: 'The user has been deleted' });
});

module.exports = router;
