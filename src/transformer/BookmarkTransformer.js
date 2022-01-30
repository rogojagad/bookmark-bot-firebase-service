const responseStatus = require('./../responseStatus');

exports.transformGetIndex = async (bookmarks, metaData, res) => {
    let responseObj = Object();
    let data = Array();

    for (let bookmark of bookmarks) {
        let temp = Object();

        temp.category = bookmark.category;
        temp.description = bookmark.description;
        temp.id = bookmark.id;
        temp.title = bookmark.title;
        temp.url = bookmark.url;

        data.push(temp);
    }

    responseObj.data = data;
    responseObj.meta = metaData;
    return res.status(responseStatus.ok).json(responseObj);
};

exports.transformCreateOne = async (id, metaData, res) => {
    let responseObj = Object();
    let data = Object();

    data.id = id;

    responseObj.data = data;
    responseObj.meta = metaData;

    return res.status(responseStatus.ok).json(responseObj);
};

exports.transformGetByCategories = async (results, metaData, res) => {
    let responseObj = Object();

    responseObj.data = results;
    responseObj.meta = metaData;

    return res.status(responseStatus.ok).json(responseObj);
};

exports.transformDeleteOne = async (metaData, res, status) => {
    let responseObj = Object();
    let data = Object();

    data.status = status;

    responseObj.data = data;
    responseObj.meta = metaData;

    return res.status(responseStatus.ok).json(responseObj);
};

exports.transformDeleteAll = async (count, metaData, res) => {
    let responseObj = Object();
    let data = Object();

    data.status = 'Success';

    responseObj.data = data;
    responseObj.meta = metaData;

    return res.status(responseStatus.ok).json(responseObj);
};
