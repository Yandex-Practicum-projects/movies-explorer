// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    res.status(409).send({ message: 'Пользователь с таким email уже существует' });
  } else {
    const { statusCode = 500, message } = err;
    res.status(statusCode).send({
      message: statusCode === 500 ? 'Внутренняя ошибка сервера' : message,
    });
  }
};

module.exports = errorHandler;
