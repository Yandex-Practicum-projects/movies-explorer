const jwt = require('jsonwebtoken');
const InvalidAuthentication = require('../errors/invalid-authentication');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new InvalidAuthentication('Необходима авторизация');
  }
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new InvalidAuthentication('Необходима авторизация');
  }
  req.user = payload;
  next();
};
