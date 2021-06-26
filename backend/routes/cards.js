const router = require('express').Router();
const { celebrate } = require('celebrate');
const Joi = require('joi-oid');
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(/(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/),
  }).unknown(true),
}), createCard);

router.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }).unknown(true),
}), deleteCard);

router.post('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }).unknown(true),
}), likeCard);

router.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    id: Joi.objectId(),
  }).unknown(true),
}), dislikeCard);

module.exports = router;
