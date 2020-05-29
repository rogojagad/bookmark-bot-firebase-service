const responseCollection = require("./../responseStatus");
const authErrMessageToHttpStatusCode = {
    "password not match": responseCollection.unauthorized,
    "user not found": responseCollection.notFound,
};

exports.transformReadAll = async (users, res) => {
    let parsedUsersData = Array();
    let result = { data: Object() };

    users.forEach((user) => {
        const userData = {
            username: user.username,
        };

        parsedUsersData.push(userData);
    });

    result.data = parsedUsersData;

    return res.status(responseCollection.ok).json(result);
};

exports.transformCreateOne = async (userData, accessToken, res) => {
    const result = { ...userData, access_token: accessToken };

    return res.status(responseCollection.created).json(result);
};

exports.transformAuthError = async (errMessage, res) => {
    let httpStatusCode = authErrMessageToHttpStatusCode[errMessage]
        ? authErrMessageToHttpStatusCode[errMessage]
        : responseCollection.unauthorized;

    const responseObject = {
        status: "Error",
        message: errMessage,
        data: Object(),
    };

    return res.status(httpStatusCode).json(responseObject);
};

exports.transformAuthSucces = async (accessToken, refreshToken, res) => {
    const responseObject = {
        status: "Success",
        message: "",
        data: {
            access_token: accessToken,
            refresh_token: refreshToken,
        },
    };

    return res.status(responseCollection.ok).json(responseObject);
};

exports.transformRefreshAccessToken = async (refreshToken, res) => {
    const responseObject = {
        status: "Success",
        data: {
            access_token: refreshToken,
        },
    };

    return res.status(responseCollection.ok).json(responseObject);
};
