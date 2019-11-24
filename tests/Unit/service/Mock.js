exports.mockServiceRequirements = () => {
    jest.mock("./../../../src/transformer/BookmarkTransformer.js", () => ({
        transformGetIndex: jest.fn(),
        transformCreateOne: jest.fn(),
        transformGetByCategories: jest.fn(),
        transformDeleteOne: jest.fn()
    }));

    jest.mock("./../../../src/service/BuildMetaDataService.js", () => ({
        buildCountMetaData: jest.fn(),
        buildCountPerCategoryMetaData: jest.fn(),
        buildDeleteOneMetaData: jest.fn()
    }));

    jest.mock("./../../../src/repository/BookmarkRepository.js", () => ({
        createOne: jest.fn(),
        readManyByCategories: jest.fn(),
        readOneById: jest.fn(),
        readAll: jest.fn(),
        deleteOneById: jest.fn()
    }));
};
