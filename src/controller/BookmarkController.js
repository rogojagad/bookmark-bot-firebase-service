const createNewBookmarkService = require("./../service/CreateNewBookmarkService");
const readBookmarkService = require("./../service/ReadBookmarkService");
const deleteBookmarkService = require("./../service/DeleteBookmarkService");

exports.index = (req, res) => {
    let categories = req.query.categories;

    if (categories) {
        readBookmarkService.readByCategories(categories, res);
    }

    readBookmarkService.readAll(res);
};

exports.storeOne = (req, res) => {
    createNewBookmarkService.createOne(req.body, res);
};

exports.deleteOne = (req, res) => {
    deleteBookmarkService.deleteOne(req.body, res);
};
