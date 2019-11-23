exports.mockControllerRequirement = () => {
    jest.mock("./../../../src/service/ReadBookmarkService.js", () => ({
        readAll: jest.fn(),
        readByCategories: jest.fn()
    }));

    jest.mock("./../../../src/service/CreateNewBookmarkService", () => ({
        createOne: jest.fn()
    }));

    jest.mock("./../../../src/service/DeleteBookmarkService", () => ({
        deleteOne: jest.fn()
    }));
};
