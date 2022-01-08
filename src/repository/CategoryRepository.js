const db = require('./../entity/Firebase');
const collectionName = 'categories';

exports.createOne = async (id, data) => {
    return db.collection(collectionName).doc(id).set(data);
};

exports.readAll = async () => {
    return db.collection(collectionName).get();
};

exports.readOneById = async (id) => {
    const category = await db.collection(collectionName).doc(id).get();

    return category.exists ? category : undefined;
};