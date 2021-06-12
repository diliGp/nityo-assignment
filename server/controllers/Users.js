const userService = require('../services/Users');
const en = require('../messages/en');

/**
 * Get all users list.
 */
const getAll = async (req, res) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const users = await userService.getAll();
    res.json({
      status: 200,
      data: users,
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).send(error.message);
  }
};

/**
 * Get user by Id.
 */
const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getOne(id);

    res.json({
      status: 200,
      data: user,
    });
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

/**
 * Create new user.
 */
const create = async (req, res) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const createdUser = await userService.create(req.body);

    res.json({
      status: 200,
      message: en.User.created,
      data: {
        id: createdUser.id,
        email: createdUser.email,
      },
    });
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

/**
 * Update user
 */
const update = async (req, res) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const id = req.params.id;
    await userService.update(id);

    res.json({
      status: 200,
      message: en.User.updated,
    });
  } catch {
    res.status(error.status || 500).send(error.message);
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = req.body.token;
    if (!token) {
      res.status(401).send();
      return;
    }

    await userService.refreshToken(token, res);
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

/**
 * Login users
 */
const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const loginData = await userService.login(email, password);
    res.json(loginData);
  } catch (error) {
    console.error(error, '===');
    res.status(error.status || 500).send(error.message);
  }
};

module.exports = {
  getAll,
  getOne,
  login,
  create,
  update,
  refreshToken,
};
