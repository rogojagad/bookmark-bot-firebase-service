const routes = require('express').Router();
const categoryController = require('../../../controller/CategoryController');
const auth = require('./../../../middleware/auth');

routes.use(auth.validateAccessToken);

routes.get('/', categoryController.index);
routes.post('/', categoryController.createOne);

module.exports = routes;