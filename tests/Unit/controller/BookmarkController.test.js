const { mockControllerRequirement } = require("./Mock");

mockControllerRequirement();

const bookmarkController = require("../../../src/controller/BookmarkController");
const readBookmarkService = require("../../../src/service/ReadBookmarkService");
const createNewBookmarkService = require("../../../src/service/CreateNewBookmarkService");
const deleteBookmarkService = require("../../../src/service/DeleteBookmarkService");

describe("BookmarkController", () => {
    describe("index", () => {
        let readRequest = {
            query: {
                categories: ["asdasd"]
            }
        };

        test("given category should call readBookmarkService#readByCategories", async () => {
            await bookmarkController.index(readRequest, {});

            expect(readBookmarkService.readByCategories).toHaveBeenCalledWith(
                readRequest.query.categories,
                {}
            );
        });

        test("category not given should call readBookmarkService#readAll", async () => {
            readRequest.query.categories = undefined;

            await bookmarkController.index(readRequest, {});

            expect(readBookmarkService.readAll).toHaveBeenCalledWith({});
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
