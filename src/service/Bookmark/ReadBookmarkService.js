const bookmarkRepository = require("../../repository/BookmarkRepository");

exports.readByCategories = async categories => {
    let bookmarks = await bookmarkRepository.readManyByCategories(categories);
    let result = Array();
    bookmarks.forEach(bookmark => {
        result.push(bookmark.data());
    });

    return result;
};

exports.readAll = async () => {
    let bookmarks = await bookmarkRepository.readAll();
    let result = Array();

    bookmarks.forEach(bookmark => {
        result.push(bookmark.data());
    });

    return result;
};
