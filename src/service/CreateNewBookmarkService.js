const bookmarkRepository = require("./../repository/BookmarkRepository");

exports.createOne = async data => {
    let ref = await bookmarkRepository.createOne(data);

    return ref.id;
};
