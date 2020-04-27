const router = require('express').Router();
const errorHandler = require('../../common/errors');
const { auth } = require('./login.service');

router.route('/').post(
/* eslint-disable */
  errorHandler(async (req, res, next) => {
    const token = await auth(req.body.login, req.body.password);
    res.status(200).json({ token });
  })
);
/* eslint-enable */

module.exports = router;
