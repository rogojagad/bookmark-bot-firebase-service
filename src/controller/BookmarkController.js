const createNewBookmarkService = require("./../service/Bookmark/CreateNewBookmarkService");
const readBookmarkService = require("./../service/Bookmark/ReadBookmarkService");
const deleteBookmarkService = require("./../service/Bookmark/DeleteBookmarkService");
const buildMetaDataService = require("./../service/BuildMetaDataService");
const transformer = require("./../transformer/BookmarkTransformer");
const expressValidator = require("express-validator");

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

    return await transformer.transformGetIndex(result, metaData, res);
};

exports.createOne = async (req, res) => {
    let errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors);
    }

    try {
        let id = await createNewBookmarkService.createOne(req.body);

        let metaData = buildMetaDataService.buildCountMetaData(1);

        return await transformer.transformCreateOne(id, metaData, res);
    } catch (error) {
        console.error(error);

        return res.status(409).json({
            message: `bookmark with URL ${req.body.url} already exists`,
        });
    }
};

exports.deleteOne = async (req, res) => {
    let statusMessage = await deleteBookmarkService.deleteOne(req.body);

    let metaData = buildMetaDataService.buildDeleteOneMetaData(req.body.id);

    return await transformer.transformDeleteOne(metaData, res, statusMessage);
};

exports.deleteAll = async (_, res) => {
    let count = await deleteBookmarkService.deleteAll();

    let metaData = buildMetaDataService.buildCountMetaData(count);

    return await transformer.transformDeleteAll(count, metaData, res);
};
