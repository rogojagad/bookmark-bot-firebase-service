const responseCollection = require("./../responseStatus");

exports.transformGetIndex = (bookmarks, metaData, res) => {
    let responseObj = Object();
    let data = Array();

    for (bookmark of bookmarks) {
        temp = Object();

        temp.title = bookmark.title;
        temp.description = bookmark.description;
        temp.url = bookmark.url;
        temp.category = bookmark.category;

        data.push(temp);
    }

    responseObj.data = data;
    responseObj.meta = metaData;
    res.status(responseCollection.ok).json(responseObj);
};

exports.transformCreateOne = (id, metaData, res) => {
    let responseObj = Object();
    let data = Object();

    data.id = id;

    responseObj.data = data;
    responseObj.meta = metaData;

    res.status(responseCollection.ok).json(responseObj);
};

exports.transformGetByCategories = (results, metaData, res) => {
    let responseObj = Object();
    let data = Object();

    responseObj.data = results;
    responseObj.meta = metaData;

    res.status(responseCollection.ok).json(responseObj);
};
