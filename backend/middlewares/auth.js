const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../components/Unauthorized');

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.send({ authorization });
    throw new Unauthorized('Необходима авторизация1');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'Enigma');
  } catch (err) {
    throw new Unauthorized('Необходима авторизация2');
  }
  req.user = payload

    .catch((err) => next(err));
};
