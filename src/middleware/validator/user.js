const { check } = require("express-validator");

exports.create = [
    check("username").exists().isString(),
    check("password").exists().isString(),
];
