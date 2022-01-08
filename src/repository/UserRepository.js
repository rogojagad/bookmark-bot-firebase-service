const db = require('./../entity/Firebase');
const collectionName = 'users';

exports.createOne = async (id, data) => {
    return await db.collection(collectionName).doc(id).set(data);
};

exports.readAll = async () => {
    return await db.collection(collectionName).get();
};

exports.readOneByUsername = async (username) => {
    const user = await db.collection(collectionName).doc(username).get();

    return user.exists ? user : undefined;
};
