require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { celebrate } = require('celebrate');
const Joi = require('joi-oid');
// const cookieParser = require('cookie-parser');
const { login, createUser } = require('./controllers/users');
const { auth } = require('./middlewares/auth');
const { NotFoundError } = require('./components/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

// app.use(cookieParser());

app.use(cors({
  // origin: 'https://domainname.kostya2120.nomoredomains.club',
  // origin: 'http://localhost:3001',
  origin: 'https://domainname.kostya2120.nomoredomains.club',
  credentials: true,
  headers: 'Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, X-Requested-With, Content-Type, Accept, authorization, Authorization',
  methods: 'GET,POST,PATCH,DELETE,OPTIONS,PUT',
}));
/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://domainname.kostya2120.nomoredomains.club');
  res.setHeader('Access-Control-Request-Headers', 'Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, X-Requested-With, Content-Type, Accept, authorization, Authorization');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Origin, X-Requested-With, Content-Type, Accept, authorization, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

/* app.use((req, res, next) => {
  res.setHeader('Cash-Control', 'no-store');
  next();
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
  next();
}); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }).unknown(true),
}), login);

app.use('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }).unknown(true),
}), createUser);

app.use((req, res, next) => {
  req.user = {
    _id: '60be04cf3e571350c8ff010c',
  };
  next();
});

app.use('/cards', /*auth,*/ require('./routes/cards'));

app.use('/users', /*auth,*/ require('./routes/users'));

app.use(errorLogger);

app.use('*', (req, res, next) => {
  throw new NotFoundError('Страница не найдена')
    .catch((err) => next(err));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  // res.status(statusCode).send({ message: statusCode === 500 ? 'Ошибка Сервера' : message });
  res.send(err);
  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(3000);
