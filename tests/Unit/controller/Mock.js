exports.mockControllerRequirement = () => {
    jest.mock("./../../../src/service/ReadBookmarkService.js", () => ({
        readAll: jest.fn(),
        readByCategories: jest.fn()
    }));

    jest.mock("./../../../src/service/CreateNewBookmarkService", () => ({
        createOne: jest.fn()
    }));

    jest.mock("./../../../src/service/DeleteBookmarkService", () => ({
        deleteOne: jest.fn(),
        deleteAll: jest.fn()
    }));

    jest.mock("./../../../src/service/BuildMetaDataService.js", () => ({
        buildCountMetaData: jest.fn(),
        buildCountPerCategoryMetaData: jest.fn(),
        buildDeleteOneMetaData: jest.fn()
    }));

    jest.mock("./../../../src/transformer/BookmarkTransformer.js", () => ({
        transformGetIndex: jest.fn(),
        transformCreateOne: jest.fn(),
        transformGetByCategories: jest.fn(),
        transformDeleteOne: jest.fn(),
        transformDeleteAll: jest.fn()
    }));
};
