const db = require("./../entity/Firebase");
const transformer = require("./../transformer/BookmarkTransformer");
const buildMetaDataService = require("./../service/BuildMetaDataService");

exports.deleteOne = (data, res) => {
    db.collection("sites")
        .doc(data.id)
        .get()
        .then(bookmark => {
            if (bookmark.exists) {
                db.collection("sites")
                    .doc(data.id)
                    .delete()
                    .then(() => {
                        let metaData = buildMetaDataService.buildDeleteOne(
                            data.id
                        );

                        transformer.transformDeleteOne(
                            metaData,
                            res,
                            "success"
                        );
                    });
            } else {
                let metaData = buildMetaDataService.buildDeleteOne(data.id);

                transformer.transformDeleteOne(metaData, res, "not found");
            }
        });
};
