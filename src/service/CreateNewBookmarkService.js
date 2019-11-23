const db = require("./../entity/Firebase");
const transformer = require("./../transformer/BookmarkTransformer");
const buildMetaDataService = require("./../service/BuildMetaDataService");

exports.createOne = (data, res) => {
    db.collection("sites")
        .add(data)
        .then(ref => {
            let metaData = buildMetaDataService.buildCountMetaData(1);

            transformer.transformCreateOne(ref.id, metaData, res);
        });
};
