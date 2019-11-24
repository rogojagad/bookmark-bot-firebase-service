const transformer = require("./../transformer/BookmarkTransformer");
const buildMetaDataService = require("./../service/BuildMetaDataService");
const bookmarkRepository = require("./../repository/BookmarkRepository");

exports.deleteOne = async (data, res) => {
    let bookmark = await bookmarkRepository.readOneById(data.id);

    if (bookmark.exists) {
        await bookmarkRepository.deleteOneById(data.id);

        let metaData = buildMetaDataService.buildDeleteOneMetaData(data.id);

        return transformer.transformDeleteOne(metaData, res, "success");
    } else {
        let metaData = buildMetaDataService.buildDeleteOneMetaData(data.id);

        return transformer.transformDeleteOne(metaData, res, "not found");
    }
};
