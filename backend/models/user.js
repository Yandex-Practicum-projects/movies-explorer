const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const InvalidAuthentication = require('../errors/invalid-authentication');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Не корректный email',
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new InvalidAuthentication('Неправильные почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new InvalidAuthentication('Неправильные почта или пароль');
          }
          return { email: user.email, _id: user._id, name: user.name };
        });
    });
};

module.exports = mongoose.model('user', userSchema);
