const createCategoryService = require('../service/Category/CreateCategoryService');
const readCategoryService = require('../service/Category/ReadCategoryService');
const buildMetaDataService = require('./../service/BuildMetaDataService');
const transformer = require('../transformer/CategoryTransformer');
const responseStatus = require('./../responseStatus');

exports.index = async (_, res) => {
    const categories = await readCategoryService.readAll();
    const metaData = buildMetaDataService.buildCountMetaData(categories.length);

    return transformer.transformGetIndex(categories, metaData, res);
};

exports.createOne = async (req, res) => {
    try {
        const id = await createCategoryService.createOne(req.body);
        const metaData = buildMetaDataService.buildCountMetaData(1);

        return await transformer.transformCreateOne(id, metaData, res);
    } catch (error) {
        console.error(error);

        return res.status(responseStatus.conflict).json({
            message: `category with name ${req.body.name} already exists`
        });
    }
};