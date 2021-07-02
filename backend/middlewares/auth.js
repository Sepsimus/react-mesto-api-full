const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../components/Unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    // res.send({ authorization });
    throw new Unauthorized('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'Enigma');
  } catch (err) {
    throw new Unauthorized('Необходима авторизация');
  }
  req.user = payload

    .catch((err) => next(err));
};
