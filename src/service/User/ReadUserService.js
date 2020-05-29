const createHashService = require("./../CreateHashService");
const userRepository = require("./../../repository/UserRepository");

exports.readAll = async () => {
    const users = await userRepository.readAll();
    let results = Array();

    users.forEach((user) => {
        results.push(user.data());
    });

    return results;
};

exports.readOneByUsername = async (username) => {
    const hashedUsername = createHashService.create(username);
    const user = await userRepository.readOneByUsername(hashedUsername);

    return user ? { id: user.id, ...user.data() } : user;
};
