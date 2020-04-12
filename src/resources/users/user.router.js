const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const ValidationError = require('../../common/validation');
const createError = require('http-errors');
const errorHandler = require('../../common/errors');

router.route('/').get(
  errorHandler(async (req, res) => {
    const users = await usersService.getAll();
    return res.status(200).json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  errorHandler(async (req, res) => {
    const user = await usersService.getUser(req.params.id);
    if (!user) {
      throw createError(404, 'User not found');
    }
    return res.status(200).json(User.toResponse(user));
  })
);

router.route('/').post(
  errorHandler(async (req, res) => {
    if (
      req.body.login === '' ||
      req.body.name === '' ||
      req.body.password.length < 6
    ) {
      const error = new ValidationError();
      throw error;
    }
    const user = await usersService.addNewUser(req.body);
    return res.status(200).json(User.toResponse(user));
  })
);

router.route('/:id').put(
  errorHandler(async (req, res) => {
    const user = await usersService.updUser(req.params.id, req.body);
    if (!user) {
      throw createError(404, 'User not found');
    }
    return res.status(200).json(user);
  })
);

router.route('/:id').delete(
  errorHandler(async (req, res) => {
    await usersService.delUser(req.params.id);
    res.status(204).json({ message: 'The user has been deleted' });
  })
);

module.exports = router;
