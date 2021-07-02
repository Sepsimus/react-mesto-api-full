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
    link: Joi.string().required().pattern(/[-a-zA-Z0-9@:%_\+.~#?&=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&=]*)?/),
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
