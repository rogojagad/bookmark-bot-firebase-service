const createNewBookmarkService = require("./../service/CreateNewBookmarkService");
const readBookmarkService = require("./../service/ReadBookmarkService");
const deleteBookmarkService = require("./../service/DeleteBookmarkService");
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

    return transformer.transformGetIndex(result, metaData, res);
};

exports.createOne = async (req, res) => {
    let errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors);
    }

    let id = await createNewBookmarkService.createOne(req.body);

    let metaData = buildMetaDataService.buildCountMetaData(1);

    return transformer.transformCreateOne(id, metaData, res);
};

exports.deleteOne = async (req, res) => {
    let statusMessage = await deleteBookmarkService.deleteOne(req.body);

    let metaData = buildMetaDataService.buildDeleteOneMetaData(req.body.id);

    return transformer.transformDeleteOne(metaData, res, statusMessage);
};

exports.deleteAll = async (req, res) => {
    let count = await deleteBookmarkService.deleteAll();

    let metaData = buildMetaDataService.buildCountMetaData(count);

    return transformer.transformDeleteAll(count, metaData, res);
};
