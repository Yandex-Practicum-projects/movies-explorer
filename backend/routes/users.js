const router = require('express').Router();
const { updateUser, getUser } = require('../controllers/user');
const { validateUpdateUser } = require('../validations/user');

router.get('/me', getUser);
router.patch('/me', validateUpdateUser, updateUser);

module.exports = router;
