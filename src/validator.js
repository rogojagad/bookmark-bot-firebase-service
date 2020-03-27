const { check } = require("express-validator");

exports.create = [
    check("title")
        .exists()
        .isString(),
    check("description")
        .exists()
        .isString(),
    check("category")
        .exists()
        .isString(),
    check("url")
        .exists()
        .isURL()
];
