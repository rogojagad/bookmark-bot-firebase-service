const createNewBookmarkService = require('./../service/Bookmark/CreateNewBookmarkService');
const readBookmarkService = require('./../service/Bookmark/ReadBookmarkService');
const deleteBookmarkService = require('./../service/Bookmark/DeleteBookmarkService');
const buildMetaDataService = require('./../service/BuildMetaDataService');
const transformer = require('./../transformer/BookmarkTransformer');

exports.index = async (req, res) => {
    const categories = req.query.categories;
    let result = Array();

    if (categories) {
        result = await readBookmarkService.readByCategories(categories);

        const metaData = buildMetaDataService.buildCountPerCategoryMetaData(
            categories,
            result
        );

        return transformer.transformGetByCategories(result, metaData, res);
    }

    result = await readBookmarkService.readAll();

    const metaData = buildMetaDataService.buildCountMetaData(result.length);

    return await transformer.transformGetIndex(result, metaData, res);
};

exports.createOne = async (req, res) => {
    try {
        const id = await createNewBookmarkService.createOne(req.body);

        const metaData = buildMetaDataService.buildCountMetaData(1);

        return await transformer.transformCreateOne(id, metaData, res);
    } catch (error) {
        console.error(error);

        return res.status(409).json({
            message: `bookmark with URL ${req.body.url} already exists`,
        });
    }
};

exports.deleteOne = async (req, res) => {
    const statusMessage = await deleteBookmarkService.deleteOne(req.body);

    const metaData = buildMetaDataService.buildDeleteOneMetaData(req.body.id);

    return await transformer.transformDeleteOne(metaData, res, statusMessage);
};

exports.deleteAll = async (_, res) => {
    const count = await deleteBookmarkService.deleteAll();

    const metaData = buildMetaDataService.buildCountMetaData(count);

    return await transformer.transformDeleteAll(count, metaData, res);
};
