const util = require('util');

const generateError = (message, status) => {
  function errorConstructor(error) {
    Error.captureStackTrace(this);

    this.message = message;
    this.status = 500;
  }

  util.inherits(errorConstructor, Error);
  errorConstructor.prototype.message = message;
  errorConstructor.prototype.status = status;
  return errorConstructor;
};

module.exports = {
  HttpException: generateError('ServiceException', 500),
};
