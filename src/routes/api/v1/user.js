const routes = require("express").Router();
const userController = require("./../../../controller/UserController");
const auth = require("./../../../middleware/auth");

routes.get("/", auth.validateToken, userController.readAll);
routes.post("/", userController.createOne);
routes.post("/auth", userController.authenticate);

module.exports = routes;
