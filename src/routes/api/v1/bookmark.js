const routes = require('express').Router();
const auth = require('./../../../middleware/auth');
const bookmarkController = require('../../../controller/BookmarkController');
const { validate } = require('../../../middleware/requestValidator');
const { createBookmarkPayload } = require('../../../schema/bookmark');

routes.use(auth.validateAccessToken);

routes.get('/', bookmarkController.index);
routes.post('/', validate(createBookmarkPayload), bookmarkController.createOne);
routes.delete('/', bookmarkController.deleteOne);
routes.delete('/all', bookmarkController.deleteAll);

module.exports = routes;
