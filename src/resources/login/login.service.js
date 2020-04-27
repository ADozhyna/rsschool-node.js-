const { JWT_SECRET_KEY } = require('../../common/config');
const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const createError = require('http-errors');
const { getByLogin } = require('../users/user.service');

const auth = async (login, password) => {
  const user = await getByLogin(login);
  if (!user) {
    throw createError(403, 'User not found');
  }
  const isValid = await compare(password, user.password);

  if (!isValid) {
    throw createError(403, 'Bad password');
  }

  return sign(
    {
      userId: user._id,
      login: user.login
    },
    JWT_SECRET_KEY,
    {
      expiresIn: '15m'
    }
  );
};

module.exports = { auth };
