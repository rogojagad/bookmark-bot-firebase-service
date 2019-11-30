const routes = require("express").Router();

let bookmarkController = require("../../../controller/BookmarkController");

routes.get("/bookmark", bookmarkController.index);
routes.post("/bookmark", bookmarkController.storeOne);
routes.delete("/bookmark", bookmarkController.deleteOne);
routes.delete("/bookmark/all", bookmarkController.deleteAll);

module.exports = routes;
