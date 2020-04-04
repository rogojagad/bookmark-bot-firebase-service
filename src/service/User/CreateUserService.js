const bcrypt = require("bcrypt");
const createHashService = require("./../CreateHashService");
const userRepository = require("./../../repository/UserRepository");

exports.createOne = async (data) => {
    const username = data.username;
    const usernameHash = createHashService.create(username);

    if (!(await validateUniqueUsername(usernameHash))) {
        throw Error("Username already exists");
    }

    const hashSalt = await bcrypt.genSalt(10);
    const password = bcrypt.hashSync(data.password, hashSalt);

    const userData = {
        username: username.trim(),
        password: password,
    };

    const ref = await userRepository.createOne(
        usernameHash,
        JSON.parse(JSON.stringify(userData))
    );

    return ref.id;
};

const validateUniqueUsername = async (username) => {
    const user = await userRepository.readOneByUsername(username);

    return user ? false : true;
};
