const authenticateUserService = require("./../service/User/AuthenticateUserService");
const createUserService = require("./../service/User/CreateUserService");
const generateTokenService = require("./../service/User/GenerateTokenService");
const readUserSevice = require("./../service/User/ReadUserService");
const userTransformer = require("./../transformer/UserTransformer");
const expressValidator = require("express-validator");

exports.authenticate = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const authResult = await authenticateUserService.authenticate({
        username: username,
        password: password,
    });

    const { authenticated, message, userId } = authResult;

    if (authenticated) {
        const tokenData = {
            id: userId,
            username: username,
        };

        const accessToken = generateTokenService.generateAccessToken(tokenData);

        const refreshToken = generateTokenService.generateRefreshToken(
            tokenData
        );

        return await userTransformer.transformAuthSucces(
            accessToken,
            refreshToken,
            res
        );
    } else {
        return await userTransformer.transformAuthError(message, res);
    }
};

exports.refreshAccessToken = async (req, res) => {
    let tokenData = Object.assign({}, req.user);
    delete tokenData["iat"];

    const accessToken = generateTokenService.generateAccessToken(tokenData);

    return await userTransformer.transformRefreshAccessToken(accessToken, res);
};

exports.createOne = async (req, res) => {
    let errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors);
    }

    const username = req.body.username;

    try {
        const id = await createUserService.createOne(req.body);
        const user = {
            id: id,
            username: username,
        };

        const accessToken = generateTokenService.generateAccessToken(user);

        return await userTransformer.transformCreateOne(user, accessToken, res);
    } catch (error) {
        console.error(error);

        return res.status(409).json({
            message: "username already exists",
        });
    }
};

exports.readAll = async (_, res) => {
    const results = await readUserSevice.readAll();

    return await userTransformer.transformReadAll(results, res);
};
