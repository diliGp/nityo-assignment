// load Joi module
const Joi = require('joi');

const createUser = {
  email: Joi.string().email().lowercase().required(),
  name: Joi.string()
    .regex(/^[A-Z]+$/i)
    .required(),
  password: Joi.string().min(5).required(),
  role: Joi.string().valid('EMPLOYEE', 'ADMIN'),
};

const updateUser = {
  name: Joi.string()
    .regex(/^[A-Z]+$/i)
    .required(),
};

const loginUser = {
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
};

module.exports = {
  '/users': {
    post: Joi.object().keys(createUser),
  },
  '/users/:id': {
    put: Joi.object().keys(updateUser),
  },
  '/users/login': {
    post: Joi.object().keys(loginUser),
  },
};
