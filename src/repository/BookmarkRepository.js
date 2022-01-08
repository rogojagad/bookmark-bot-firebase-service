const db = require('./../entity/Firebase');
const collectionName = 'sites';

exports.createOne = async (id, data) => {
    return db.collection(collectionName).doc(id).set(data);
};

exports.readManyByCategories = async (categories) => {
    return db.collection(collectionName).where('category', 'in', categories).get();
};

exports.readOneById = async (id) => {
    const bookmark = await db.collection(collectionName).doc(id).get();

    return bookmark.exists ? bookmark : undefined;
};

exports.readAll = async () => {
    return db.collection(collectionName).get();
};

exports.deleteOneById = async (id) => {
    return db.collection(collectionName).doc(id).delete();
};

exports.deleteAll = async () => {
    let docs = await this.readAll();
    let bookmarkDeletePromises = Array();

    docs.forEach(async (bookmark) => {
        bookmarkDeletePromises.push(this.deleteOneById(bookmark.id));
    });

    let count = bookmarkDeletePromises.length;

    await Promise.all(bookmarkDeletePromises);

    return count;
};
