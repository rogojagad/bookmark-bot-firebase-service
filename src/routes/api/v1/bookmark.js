const routes = require('express').Router();

let bookmarkController = require('../../../controller/BookmarkController');

routes.get('/bookmark', bookmarkController.index);
routes.post('/bookmark', bookmarkController.storeOne);

module.exports = routes;