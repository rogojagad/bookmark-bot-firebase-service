const userRepository = require("./../../repository/UserRepository");

exports.readAll = async () => {
    const users = await userRepository.readAll();
    let results = Array();

    users.forEach(user => {
        results.push(user.data());
    });

    return results;
};

exports.readOneByUsername = async username => {
    const user = await userRepository.readOneByUsername(username);

    return user ? { id: user.id, ...user.data() } : user;
};
