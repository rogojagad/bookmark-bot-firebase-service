const routes = require('express').Router();
const categoryController = require('../../../controller/CategoryController');
const auth = require('./../../../middleware/auth');
const { validate } = require('../../../middleware/requestValidator');
const { createCategoryPayload } = require('../../../schema/category');

routes.use(auth.validateAccessToken);

routes.get('/', categoryController.index);
routes.post('/', validate(createCategoryPayload), categoryController.createOne);

module.exports = routes;