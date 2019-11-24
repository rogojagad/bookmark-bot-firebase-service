const { mockServiceRequirements } = require("./Mock");

mockServiceRequirements();

const createNewBookmarkService = require("./../../../src/service/CreateNewBookmarkService");
const transformer = require("./../../../src/transformer/BookmarkTransformer");
const buildMetaDataService = require("./../../../src/service/BuildMetaDataService");
const bookmarkRepository = require("./../../../src/repository/BookmarkRepository");

describe("createOne", () => {
    const requestParams = {
        url: "http://link.com",
        title: "title",
        body: "body",
        description: "description"
    };

    test("should call bookmark repository and create meta data service", async () => {
        let ref = { id: "id1" };
        let metaData = { count: 1 };

        bookmarkRepository.createOne.mockReturnValueOnce(ref);
        buildMetaDataService.buildCountMetaData.mockReturnValueOnce(metaData);

        await createNewBookmarkService.createOne(requestParams, {});

        expect(bookmarkRepository.createOne).toHaveBeenCalledWith(
            requestParams
        );

        expect(buildMetaDataService.buildCountMetaData).toHaveBeenCalledWith(1);

        expect(transformer.transformCreateOne).toHaveBeenCalledWith(
            ref.id,
            metaData,
            {}
        );
    });
});