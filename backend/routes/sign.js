const router = require('express').Router();
const { celebrate } = require('celebrate');
const Joi = require('joi-oid');
const {
  login, createUser,
} = require('../controllers/users');

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().require().email(),
    password: Joi.string().require().min(8),
  }).unknown(true),
}), login);

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().require().email(),
    password: Joi.string().require().min(8),
  }).unknown(true),
}), createUser);

module.exports = router;
