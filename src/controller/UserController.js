const authenticateUserService = require("./../service/User/AuthenticateUserService");
const createUserService = require("./../service/User/CreateUserService");
const generateTokenService = require("./../service/User/GenerateTokenService");
const readUserSevice = require("./../service/User/ReadUserService");

exports.authenticate = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const authResult = await authenticateUserService.authenticate({
        username: username,
        password: password
    });

    const { authenticated, message, userId } = authResult;

    if (authenticated) {
        const accessToken = generateTokenService.generateAccessToken({
            id: userId,
            username: username
        });

        return res.json({ access_token: accessToken });
    } else {
        const httpStatusCode = message === "password not match" ? 401 : 404;
        return res.status(httpStatusCode).json({ message: message });
    }
};

exports.createOne = async (req, res) => {
    const username = req.body.username;
    const id = await createUserService.createOne(req.body);

    const user = {
        id: id,
        username: username
    };

    const accessToken = generateTokenService.generateAccessToken(user);

    return res.json({ access_token: accessToken });
};

exports.readAll = async (_, res) => {
    const results = await readUserSevice.readAll();

    console.log(results);

    return res.json(results);
};
