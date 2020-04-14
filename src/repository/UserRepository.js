const db = require("./../entity/Firebase");

exports.createOne = async (id, data) => {
    return await db.collection("users").doc(id).set(data);
};

exports.readAll = async () => {
    return await db.collection("users").get();
};

exports.readOneByUsername = async (username) => {
    const user = await db.collection("users").doc(username).get();

    return user.exists ? user : undefined;
};
