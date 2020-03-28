const bcrypt = require("bcrypt");
const userRepository = require("./../../repository/UserRepository");
const hashSalt = process.env.HASH_SALT;

exports.createOne = async data => {
    const password = bcrypt.hashSync(data.password, hashSalt);
    const username = data.username;

    const userData = {
        username: username,
        password: password
    };

    const ref = await userRepository.createOne(
        JSON.parse(JSON.stringify(userData))
    );

    return ref.id;
};
