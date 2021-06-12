const bcrypt = require('bcrypt');
const { User } = require('../models');
const { generateAccessToken, generateRefreshToken, verifyToken } = require('../helpers/common');
const { HttpException } = require('../helpers/error');

/**
 * Get all users list.
 */
const getAll = async () => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'name', 'email', 'role', 'createdAt', 'updatedAT'],
    });
    return users;
  } catch (error) {
    throw new HttpException(error.message, 500);
  }
};

/**
 * Get user by Id.
 */
const getOne = async userId => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'name', 'email', 'role'],
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    throw new HttpException(error, 500);
  }
};

/**
 * Create new user.
 */
const create = async body => {
  try {
    const password = await bcrypt.hash(body.password, 2);
    const userData = {
      name: body.name,
      email: body.email,
      role: body.role || 'EMPLOYEE',
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return await User.create(userData);
  } catch (error) {
    throw new HttpException(error, 500);
  }
};

/**
 * Update user
 */
const update = async (userId, body) => {
  try {
    if (!req.user) {
      res.sendStatus(401);
      return;
    }

    const userData = {
      ...body,
      updatedAt: new Date(),
    };

    return await User.update(userData, {
      where: {
        id: userId,
      },
    });
  } catch {
    throw new HttpException(error, 500);
  }
};

const refreshToken = async (token, res) => {
  try {
    verifyToken(token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
      if (error) {
        res.status(403).send(error.message);
        return;
      }

      const accessToken = generateAccessToken({
        id: user.id,
        name: user.name,
        email: user.email,
      });

      res.json({
        accessToken,
      });
    });
  } catch (error) {
    res.status(500).send('Something went wrong');
  }
};

/**
 * Login users
 */
const login = async (email, password) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'name', 'email', 'password', 'role'],
      where: {
        email,
      },
      raw: true,
    });

    if (!user || !user.email) {
      throw new HttpException('Either email or password is wrong.', 400);
    }

    const isMatched = bcrypt.compare(password, user.password);
    if (!isMatched) {
      throw new HttpException('Access forbidden!', 403);
    }

    const { password: _, ...userLoginData } = user;

    const accessToken = generateAccessToken(userLoginData);
    const refreshToken = generateRefreshToken(userLoginData);

    return {
      accessToken,
      refreshToken,
      data: { ...userLoginData },
    };
  } catch (error) {
    throw new HttpException(error, 500);
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
