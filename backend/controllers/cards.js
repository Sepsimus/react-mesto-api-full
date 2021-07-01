const Card = require('../models/card');
const { NotFoundError } = require('../components/NotFoundError');
const { NotValidData } = require('../components/NotValidData');
const { MethodNotAllowed } = require('../components/MethodNotAllowed');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate('user')
    .then((card) => res.send(card))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { ownerId } = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner: ownerId })
    .then(() => res.status(200).send({ message: 'Карточка создана' }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new NotValidData('Переданы неккоретные данные');
      }
      next(err);
    })
    .catch((err) => next(err));
};

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => {
      if (req.user._id !== card.owner) {
        throw new MethodNotAllowed('Метод не дозволен');
      }
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else {
        res.status(200).send({ message: 'Карточка удалена' });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new NotValidData('Переданы неккоретные данные');
      }
      next(err);
    })
    .catch((err) => next(err));
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else {
        res.send({ data: card });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new NotValidData('Переданы неккоретные данные');
      }
      next(err);
    })
    .catch((err) => next(err));
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      } else {
        res.send({ data: card });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new NotValidData('Переданы неккоретные данные');
      }
      next(err);
    })
    .catch((err) => (err));
};
