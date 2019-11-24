const transformer = require("./../transformer/BookmarkTransformer");
const buildMetaDataService = require("./../service/BuildMetaDataService");
const bookmarkRepository = require("./../repository/BookmarkRepository");

exports.createOne = async (data, res) => {
    let ref = await bookmarkRepository.createOne(data);
    let metaData = buildMetaDataService.buildCountMetaData(1);

    return transformer.transformCreateOne(ref.id, metaData, res);
};
