const routes = require("express").Router();
const userController = require("./../../../controller/UserController");
const auth = require("./../../../middleware/auth");
const validator = require("./../../../middleware/validator/user");

routes.get("/", auth.validateToken, userController.readAll);
routes.post("/", validator.create, userController.createOne);
routes.post("/auth", userController.authenticate);

module.exports = routes;
