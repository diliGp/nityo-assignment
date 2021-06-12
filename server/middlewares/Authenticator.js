const { verifyToken } = require('../helpers/common');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    res.status(401).send();
    throw error;
  }

  verifyToken(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      res.status(403).send(error.message);
      return;
    }

    req.user = user;
    next();
  });
};
