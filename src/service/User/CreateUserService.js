const bcrypt = require("bcrypt");
const userRepository = require("./../../repository/UserRepository");

exports.createOne = async (data) => {
    const username = data.username;

    if (!(await validateUniqueUsername(username))) {
        throw Error("Username already exists");
    }

    const hashSalt = await bcrypt.genSalt(10);
    const password = bcrypt.hashSync(data.password, hashSalt);

    const userData = {
        username: username.trim(),
        password: password,
    };

    const ref = await userRepository.createOne(
        JSON.parse(JSON.stringify(userData))
    );

    return ref.id;
};

const validateUniqueUsername = async (username) => {
    const user = await userRepository.readOneByUsername(username);

    return user ? false : true;
};
