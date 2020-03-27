const db = require("./../entity/Firebase");

exports.createOne = async data => {
    return db.collection("sites").add(data);
};

exports.readManyByCategories = async categories => {
    return db
        .collection("sites")
        .where("category", "in", categories)
        .get();
};

exports.readOneById = async id => {
    return db
        .collection("sites")
        .doc(id)
        .get();
};

exports.readAll = async () => {
    return db.collection("sites").get();
};

exports.deleteOneById = async id => {
    return db
        .collection("sites")
        .doc(id)
        .delete();
};

exports.deleteAll = async () => {
    let docs = await this.readAll();
    let bookmarkDeletePromises = Array();

    docs.forEach(async bookmark => {
        bookmarkDeletePromises.push(this.deleteOneById(bookmark.id));
    });

    let count = bookmarkDeletePromises.length;

    await Promise.all(bookmarkDeletePromises);

    return count;
};
