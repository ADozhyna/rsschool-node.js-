const { verify } = require('jsonwebtoken');
const createError = require('http-errors');
const { JWT_SECRET_KEY } = require('./config');

const checkLogin = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw createError(401, 'Unautorized');
  }
  /* eslint-disable */
  const token = authorization.split(' ')[1];
  verify(token, JWT_SECRET_KEY, (error, decoded) => {
    if (error) {
      res.status(401).json({ message: 'Unautorized' });
    } else {
      req.userId = decoded.userId;
      req.login = decoded.login;
      next();
    }
  });
};

/* eslint-enable */

module.exports = { checkLogin };
