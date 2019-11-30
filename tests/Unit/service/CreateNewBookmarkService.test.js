const { mockServiceRequirements } = require("./Mock");

mockServiceRequirements();

const createNewBookmarkService = require("./../../../src/service/CreateNewBookmarkService");
const bookmarkRepository = require("./../../../src/repository/BookmarkRepository");

describe("createOne", () => {
    const requestParams = {
        url: "http://link.com",
        title: "title",
        body: "body",
        description: "description"
    };

    const ref = { id: "id1" };

    test("should call bookmark repository and createMetaData service", async () => {
        bookmarkRepository.createOne.mockReturnValueOnce(ref);

        await createNewBookmarkService.createOne(requestParams, {});

        expect(bookmarkRepository.createOne).toHaveBeenCalledWith(
            requestParams
        );
    });
});
