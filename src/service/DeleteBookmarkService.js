const bookmarkRepository = require("./../repository/BookmarkRepository");

exports.deleteOne = async data => {
    let bookmark = await bookmarkRepository.readOneById(data.id);

    if (bookmark.exists) {
        await bookmarkRepository.deleteOneById(data.id);

        return "success";
    }

    return "not found";
};

exports.deleteAll = async () => {
    let count = await bookmarkRepository.deleteAll();

    return count;
};
