const db = require("./../entity/Firebase");

exports.createOne = async (data) => {
    return await db.collection("users").doc(data.username).set(data);
};

exports.readAll = async () => {
    return await db.collection("users").get();
};

exports.readOneByUsername = async (username) => {
    const user = await db.collection("users").doc(username).get();

    return user.exists ? user : undefined;
};
