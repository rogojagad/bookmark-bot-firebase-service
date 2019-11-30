const createNewBookmarkService = require("./../service/CreateNewBookmarkService");
const readBookmarkService = require("./../service/ReadBookmarkService");
const deleteBookmarkService = require("./../service/DeleteBookmarkService");
const buildMetaDataService = require("./../service/BuildMetaDataService");
const transformer = require("./../transformer/BookmarkTransformer");

exports.index = async (req, res) => {
    let categories = req.query.categories;
    let result = Array();

    if (categories) {
        result = await readBookmarkService.readByCategories(categories);

        let metaData = buildMetaDataService.buildCountPerCategoryMetaData(
            categories,
            result
        );

        return transformer.transformGetByCategories(result, metaData, res);
    }

    result = await readBookmarkService.readAll();

    let metaData = buildMetaDataService.buildCountMetaData(result.length);

    return transformer.transformGetIndex(result, metaData, res);
};

exports.storeOne = async (req, res) => {
    let id = await createNewBookmarkService.createOne(req.body, res);

    let metaData = buildMetaDataService.buildCountMetaData(1);

    return transformer.transformCreateOne(id, metaData, res);
};

exports.deleteOne = async (req, res) => {
    let statusMessage = await deleteBookmarkService.deleteOne(req.body, res);

    let metaData = buildMetaDataService.buildDeleteOneMetaData(req.body.id);

    return transformer.transformDeleteOne(metaData, res, statusMessage);
};
