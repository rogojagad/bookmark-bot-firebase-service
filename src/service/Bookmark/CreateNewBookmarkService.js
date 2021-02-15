const createHashService = require("./../CreateHashService");
const bookmarkRepository = require("../../repository/BookmarkRepository");

exports.createOne = async (data) => {
    const url = data.url.trim();
    const id = createHashService.create(url);

    if (!(await validateUniqueBookmarkUrl(id))) {
        throw Error(`Boookmark with URL ${url} already exists`);
    }

    delete data["url"];

    await bookmarkRepository.createOne(id, { ...data, url: url });

    return id;
};

const validateUniqueBookmarkUrl = async (urlHash) => {
    const bookmark = await bookmarkRepository.readOneById(urlHash);

    return bookmark ? false : true;
};
