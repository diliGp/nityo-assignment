const jwt = require('jsonwebtoken');

const generateAccessToken = user => {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });

  return token;
};

const generateRefreshToken = user => {
  const token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

  return token;
};

const verifyToken = (token, secret, callback) => {
  jwt.verify(token, secret, callback);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};
