const { mockServiceRequirements } = require("./Mock");

mockServiceRequirements();

const readBookmarkService = require("./../../../src/service/ReadBookmarkService");
const bookmarkRepository = require("./../../../src/repository/BookmarkRepository");
const faker = require("faker");

let mockBookmarkResult = [];
let expectedResult = [];

for (let i = 0; i < 5; i++) {
    expectedResult.push(faker.lorem.sentence());
}

for (let i = 0; i < expectedResult.length; i++) {
    let bookmarkMock = {
        data: () => {
            return expectedResult[i];
        }
    };

    mockBookmarkResult.push(bookmarkMock);
}

describe("read all", () => {
    test("should call bookmarkRepository#readAll", async () => {
        bookmarkRepository.readAll.mockReturnValueOnce(mockBookmarkResult);

        let result = await readBookmarkService.readAll();

        expect(bookmarkRepository.readAll).toHaveBeenCalledTimes(1);

        expect(result).toEqual(expectedResult);
    });
});

describe("read by categories", () => {
    let categories = [];

    for (let i = 0; i < 5; i++) {
        categories.push(faker.lorem.word());
    }

    test("should call bookmarkRepository#readManyByCategories", async () => {
        bookmarkRepository.readManyByCategories.mockReturnValueOnce(
            mockBookmarkResult
        );

        let result = await readBookmarkService.readByCategories(categories);

        expect(bookmarkRepository.readManyByCategories).toHaveBeenCalledWith(
            categories
        );

        expect(result).toEqual(expectedResult);
    });
});
