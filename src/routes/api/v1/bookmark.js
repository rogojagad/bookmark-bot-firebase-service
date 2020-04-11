const routes = require("express").Router();
const auth = require("./../../../middleware/auth");
const validator = require("../../../middleware/validator/bookmark");
const bookmarkController = require("../../../controller/BookmarkController");

routes.use(auth.validateToken);

routes.get("/", bookmarkController.index);
routes.post("/", validator.create, bookmarkController.createOne);
routes.delete("/", bookmarkController.deleteOne);
routes.delete("/all", bookmarkController.deleteAll);

module.exports = routes;
