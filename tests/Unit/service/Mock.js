exports.mockServiceRequirements = () => {
    jest.mock("./../../../src/repository/BookmarkRepository.js", () => ({
        createOne: jest.fn(),
        readManyByCategories: jest.fn(),
        readOneById: jest.fn(),
        readAll: jest.fn(),
        deleteOneById: jest.fn()
    }));
};
