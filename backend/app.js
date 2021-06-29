require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { celebrate } = require('celebrate');
const Joi = require('joi-oid');
const { login, createUser } = require('./controllers/users');
const { auth } = require('./middlewares/auth');
const { NotFoundError } = require('./components/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// const { PORT = 3000 } = process.env;

const app = express();

const corsOption = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/crash-test', cors(corsOption), () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/signin', cors(corsOption), celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }).unknown(true),
}), login);

app.use('/signup', cors(corsOption), celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().pattern(/(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }).unknown(true),
}), createUser);

app.use('/cards', cors(corsOption), auth, require('./routes/cards'));

app.use('/users', cors(corsOption), auth, require('./routes/users'));

app.use(errorLogger);

app.use('*', (req, res, next) => {
  throw new NotFoundError('Страница не найдена')
    .catch((err) => next(err));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'Ошибка Сервера' : message });
  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(3000);
