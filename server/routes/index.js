const express = require('express');
const Users = require('../controllers/Users');
const SchemaValidator = require('../middlewares/SchemaValidator');
const authenticator = require('../middlewares/Authenticator');

const router = express.Router();

// We are using the formatted Joi Validation error
// Pass false as argument to use a generic error
const validateRequest = SchemaValidator(true);

router.get('/users', authenticator, Users.getAll);
router.get('/users/:id', Users.getOne);
router.post('/users', validateRequest, /* authenticator, */ Users.create);
router.put('/users/:id', validateRequest, authenticator, Users.update);
router.post('/login', validateRequest, Users.login);
router.post('/token', Users.refreshToken);

router.get('/', (_, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
