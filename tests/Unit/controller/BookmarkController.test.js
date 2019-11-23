const { mockControllerRequirement } = require("./Mock");

mockControllerRequirement();

const bookmarkController = require("../../../src/controller/BookmarkController");
const mockReadBookmarkService = require("../../../src/service/ReadBookmarkService");
const mockCreateNewBookmarkService = require("../../../src/service/CreateNewBookmarkService");
const mockDeleteBookmarkService = require("../../../src/service/DeleteBookmarkService");

describe("BookmarkController", () => {
    describe("index", () => {
        let readRequest = {
            query: {
                categories: ["asdasd"]
            }
        };

        test("given category should call readBookmarkService#readByCategories", async () => {
            await bookmarkController.index(readRequest, {});

            expect(
                mockReadBookmarkService.readByCategories
            ).toHaveBeenCalledWith(readRequest.query.categories, {});
        });

        test("category not given should call readBookmarkService#readAll", async () => {
            readRequest.query.categories = [];

            await bookmarkController.index(readRequest, {});

            expect(mockReadBookmarkService.readAll).toHaveBeenCalledWith({});
        });
    });

    describe("store one", () => {
        let storeRequest = {
            body: {}
        };

        test("should call createNewBookmarkService#createOne", async () => {
            await bookmarkController.storeOne(storeRequest, {});

            expect(mockCreateNewBookmarkService.createOne).toHaveBeenCalledWith(
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

            expect(mockDeleteBookmarkService.deleteOne).toHaveBeenCalledWith(
                deleteRequest.body,
                {}
            );
        });
    });
});
