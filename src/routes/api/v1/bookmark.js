const routes = require("express").Router();
const validator = require("../../../validator");

let bookmarkController = require("../../../controller/BookmarkController");

routes.get("/bookmark", bookmarkController.index);
routes.post("/bookmark", validator.create, bookmarkController.createOne);
routes.delete("/bookmark", bookmarkController.deleteOne);
routes.delete("/bookmark/all", bookmarkController.deleteAll);

module.exports = routes;
