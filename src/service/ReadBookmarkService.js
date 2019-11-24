const transformer = require("./../transformer/BookmarkTransformer");
const buildMetaDataService = require("./../service/BuildMetaDataService");
const bookmarkRepository = require("./../repository/BookmarkRepository");

exports.readByCategories = async (categories, res) => {
    let bookmarks = await bookmarkRepository.readManyByCategories(categories);
    let result = Array();
    bookmarks.forEach(bookmark => {
        result.push(bookmark.data());
    });
    let metaData = buildMetaDataService.buildCountPerCategoryMetaData(
        categories,
        result
    );
    return transformer.transformGetByCategories(result, metaData, res);
};

exports.readAll = async res => {
    let bookmarks = await bookmarkRepository.readAll();
    let result = Array();

    bookmarks.forEach(bookmark => {
        result.push(bookmark.data());
    });

    let metaData = buildMetaDataService.buildCountMetaData(result.length);

    return transformer.transformGetIndex(result, metaData, res);
};
