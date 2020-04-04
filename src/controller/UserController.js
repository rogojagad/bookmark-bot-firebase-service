const authenticateUserService = require("./../service/User/AuthenticateUserService");
const createUserService = require("./../service/User/CreateUserService");
const generateTokenService = require("./../service/User/GenerateTokenService");
const readUserSevice = require("./../service/User/ReadUserService");
const userTransformer = require("./../transformer/UserTransformer");

exports.authenticate = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const authResult = await authenticateUserService.authenticate({
        username: username,
        password: password,
    });

    const { authenticated, message, userId } = authResult;

    if (authenticated) {
        const accessToken = generateTokenService.generateAccessToken({
            id: userId,
            username: username,
        });

        return await userTransformer.transformAuthSucces(accessToken, res);
    } else {
        return await userTransformer.transformAuthError(message, res);
    }
};

exports.createOne = async (req, res) => {
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
