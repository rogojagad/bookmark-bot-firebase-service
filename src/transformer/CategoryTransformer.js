const responseStatus = require("./../responseStatus");

exports.transformGetIndex = async (categories, metaData, res) => {
    const responseObj = Object();
    const data = Array();

    categories.forEach(category => {
        data.push({
            id: category.id,
            name: category.name,
            color: category.color
        });
    });

    responseObj.data = data;
    responseObj.meta = metaData;

    return res.status(responseStatus.ok).json(responseObj);
};

exports.transformCreateOne = async (id, meta, res) => {
    const responseObj = {
        data: {
            id
        },
        meta
    };

    return res.status(responseStatus.ok).json(responseObj);
};