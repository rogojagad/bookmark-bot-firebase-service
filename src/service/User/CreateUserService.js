const bcrypt = require("bcrypt");
const userRepository = require("./../../repository/UserRepository");

exports.createOne = async data => {
    const hashSalt = await bcrypt.genSalt(10);
    console.log(hashSalt);
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
