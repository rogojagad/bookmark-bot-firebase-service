const routes = require("express").Router();
const auth = require("./../../../middleware/auth");
const validator = require("../../../validator");

const bookmarkController = require("../../../controller/BookmarkController");

routes.get("/", auth.validateToken, bookmarkController.index);
routes.post(
    "/",
    auth.validateToken,
    validator.create,
    bookmarkController.createOne
);
routes.delete("/", auth.validateToken, bookmarkController.deleteOne);
routes.delete("/all", auth.validateToken, bookmarkController.deleteAll);

module.exports = routes;
