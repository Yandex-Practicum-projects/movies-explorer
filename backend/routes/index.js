const router = require('express').Router();
const NotFound = require('../errors/not-found');
const { login, createUser, logout } = require('../controllers/user');
const { validateLogin, validateCreateUser } = require('../validations/user');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);
router.delete('/signout', logout);

router.use(require('../middlewares/auth'));

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use('*', () => {
  throw new NotFound('Неверный маршрут');
});

module.exports = router;
