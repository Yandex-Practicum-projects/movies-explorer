require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const {
  PORT = 3000,
  MONGO_URL = 'mongodb://127.0.0.1',
} = process.env;

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: ['https://stepanov.nomoredomains.sbs', 'http://localhost:3000'],
  credentials: true,
}));

mongoose.connect(`${MONGO_URL}/bitfilmsdb`, {
  useNewUrlParser: true,
  autoIndex: true,
});

app.use(cookieParser());
app.use(requestLogger);

app.use('/', require('./routes'));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Порт: ${PORT}, Mongo URL: ${MONGO_URL}`);
});
