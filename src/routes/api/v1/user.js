const routes = require('express').Router();
const userController = require('./../../../controller/UserController');
const auth = require('./../../../middleware/auth');
const { validate } = require('../../../middleware/requestValidator');
const { createUserPayload } = require('../../../schema/user');

routes.get('/', auth.validateAccessToken, userController.readAll);
routes.get(
    '/token',
    auth.validateRefreshToken,
    userController.refreshAccessToken
);
routes.post('/', validate(createUserPayload), userController.createOne);
routes.post('/auth', userController.authenticate);

module.exports = routes;
