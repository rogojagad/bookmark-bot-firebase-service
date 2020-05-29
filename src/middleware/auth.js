const jwt = require("jsonwebtoken");
const responseCollection = require("./../responseStatus");

exports.validateAccessToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === undefined)
        return res.status(responseCollection.unauthorized).json({
            message: "token not found",
            name: "TokenNotFoundError",
        });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(responseCollection.forbidden).json({
                message: err.message,
                name: err.name,
            });
        req.user = user;
        next();
    });
};

exports.validateRefreshToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === undefined)
        return res.status(responseCollection.unauthorized).json({
            message: "token not found",
            name: "TokenNotFoundError",
        });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(responseCollection.forbidden).json({
                message: err.message,
                name: err.name,
            });
        req.user = user;
        next();
    });
};
