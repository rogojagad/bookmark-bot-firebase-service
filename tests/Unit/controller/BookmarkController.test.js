const { mockControllerRequirement } = require("./Mock");

mockControllerRequirement();

const bookmarkController = require("../../../src/controller/BookmarkController");
const readBookmarkService = require("../../../src/service/ReadBookmarkService");
const createNewBookmarkService = require("../../../src/service/CreateNewBookmarkService");
const deleteBookmarkService = require("../../../src/service/DeleteBookmarkService");
const buildMetaDataService = require("./../../../src/service/BuildMetaDataService.js");
const bookmarkTransformer = require("./../../../src/transformer/BookmarkTransformer");

describe("BookmarkController", () => {
    describe("index", () => {
        let readRequest = {
            query: {
                categories: ["asdasd"]
            }
        };

        const readResult = ["item1", "item2"];

        test("given category should call readBookmarkService#readByCategories", async () => {
            readBookmarkService.readByCategories.mockReturnValueOnce(
                readResult
            );

            await bookmarkController.index(readRequest, {});

            expect(readBookmarkService.readByCategories).toHaveBeenCalledWith(
                readRequest.query.categories
            );

            expect(
                buildMetaDataService.buildCountPerCategoryMetaData
            ).toHaveBeenCalledWith(readRequest.query.categories, readResult);

            expect(
                bookmarkTransformer.transformGetByCategories
            ).toHaveBeenCalledTimes(1);
        });

        test("category not given should call readBookmarkService#readAll", async () => {
            readBookmarkService.readAll.mockReturnValueOnce(readResult);

            readRequest.query.categories = undefined;

            await bookmarkController.index(readRequest);

            expect(readBookmarkService.readAll).toHaveBeenCalledTimes(1);

            expect(
                buildMetaDataService.buildCountMetaData
            ).toHaveBeenCalledWith(readResult.length);

            expect(bookmarkTransformer.transformGetIndex).toHaveBeenCalledTimes(
                1
            );
        });
    });

    describe("store one", () => {
        let storeRequest = {
            body: {}
        };

        test("should call createNewBookmarkService#createOne", async () => {
            await bookmarkController.storeOne(storeRequest, {});

            expect(createNewBookmarkService.createOne).toHaveBeenCalledWith(
                storeRequest.body,
                {}
            );
        });
    });

    describe("delete one", () => {
        let deleteRequest = {
            body: {}
        };

        test("should call createNewBookmarkService#createOne", async () => {
            await bookmarkController.deleteOne(deleteRequest, {});

            expect(deleteBookmarkService.deleteOne).toHaveBeenCalledWith(
                deleteRequest.body,
                {}
            );
        });
    });
});
