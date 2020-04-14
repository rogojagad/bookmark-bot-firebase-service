const readUserService = require("./ReadUserService");
const bcrypt = require("bcrypt");

exports.authenticate = async userData => {
    const username = userData.username;
    const password = userData.password;
    const result = {
        authenticated: "",
        message: "",
        userId: ""
    };

    const user = await readUserService.readOneByUsername(username);

    if (user) {
        result.authenticated = await bcrypt.compare(password, user.password);
        result.userId = user.id;

        result.message = result.authenticated ? "" : "password not match";
    } else {
        result.authenticated = false;
        result.message = "user not found";
    }

    return result;
};
