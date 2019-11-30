const bookmarkRepository = require("./../repository/BookmarkRepository");

exports.deleteOne = async (data, res) => {
    let bookmark = await bookmarkRepository.readOneById(data.id);

    if (bookmark.exists) {
        await bookmarkRepository.deleteOneById(data.id);

        return "success";
    }

    return "not found";
};
