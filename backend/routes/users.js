const router = require('express').Router();
const { celebrate } = require('celebrate');
const Joi = require('joi-oid');
const {
  getUsers, getUser, updateUser, updateAvatarUser, getMe,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getMe);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }).unknown(true),
}), getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }).unknown(true),
}), updateUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/[-a-zA-Z0-9@:%_\+.~#?&=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&=]*)?//* (https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com|)))(:\d{2,5})?((\/.+)+)?\/?#? */),
  }).unknown(true),
}), updateAvatarUser);

module.exports = router;
