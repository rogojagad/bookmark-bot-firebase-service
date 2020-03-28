const db = require("./../entity/Firebase");

exports.createOne = async data => {
    return await db.collection("users").add(data);
};

exports.readAll = async () => {
    return await db.collection("users").get();
};

exports.readOneByUsername = async username => {
    const users = await db
        .collection("users")
        .where("username", "==", username)
        .limit(1)
        .get();

    let userResult = undefined;

    users.forEach(user => {
        userResult = user;
    });

    return userResult;
};
