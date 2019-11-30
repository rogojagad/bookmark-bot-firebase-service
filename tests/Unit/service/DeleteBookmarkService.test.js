const { mockServiceRequirements } = require("./Mock");

mockServiceRequirements();

const deleteBookmarkService = require("./../../../src/service/DeleteBookmarkService");
const bookmarkRepository = require("./../../../src/repository/BookmarkRepository");

describe("delete one", () => {
    const requestData = {
        id: "id1"
    };

    let mockBookmarkValue = {
        exists: true
    };

    test("should delete one by ID found", async () => {
        bookmarkRepository.readOneById.mockReturnValueOnce(mockBookmarkValue);

        let message = await deleteBookmarkService.deleteOne(requestData);

        expect(bookmarkRepository.readOneById).toHaveBeenCalledWith(
            requestData.id
        );

        expect(bookmarkRepository.deleteOneById).toHaveBeenCalledWith(
            requestData.id
        );

        expect(message).toEqual("success");
    });

    test("should delete one by ID not found", async () => {
        mockBookmarkValue.exists = false;

        bookmarkRepository.readOneById.mockReturnValueOnce(mockBookmarkValue);

        let message = await deleteBookmarkService.deleteOne(requestData);

        expect(bookmarkRepository.readOneById).toHaveBeenCalledWith(
            requestData.id
        );

        expect(message).toEqual("not found");
    });
});

describe("delete all", () => {
    test("should delete all within sites category", async () => {
        let count = Math.floor(Math.random() * 10);

        bookmarkRepository.deleteAll.mockReturnValueOnce(count);

        let result = await deleteBookmarkService.deleteAll();

        expect(bookmarkRepository.deleteAll).toHaveBeenCalledTimes(1);

        expect(result).toEqual(count);
    });
});
