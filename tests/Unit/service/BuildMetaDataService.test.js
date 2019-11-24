const buildMetaDataService = require("./../../../src/service/BuildMetaDataService");

describe("Build meta data service", () => {
    describe("buildCountMetaData", () => {
        test("should build meta data with count data", async () => {
            let count = Math.random();

            let expectedResultFormat = {
                count: count
            };

            let result = await buildMetaDataService.buildCountMetaData(count);

            expect(result).toStrictEqual(expectedResultFormat);
        });
    });

    describe("buildCountPerCategoryMetaData", () => {
        test("should build meta data with count data per category", async () => {
            let categories = ["cat 1", "cat 2", "cat 3"];
            let bookmarkDataMock = [
                { category: "cat 1" },
                { category: "cat 1" },
                { category: "cat 2" }
            ];
            let expectedResult = {
                count: {
                    "cat 1": 2,
                    "cat 2": 1,
                    "cat 3": 0
                }
            };

            let result = await buildMetaDataService.buildCountPerCategoryMetaData(
                categories,
                bookmarkDataMock
            );

            expect(result).toStrictEqual(expectedResult);
        });
    });

    describe("buildDeleteOneMetaData", () => {
        test("should build meta data for deleteOne request", async () => {
            let id = "id1";
            let expectedResultFormat = {
                id: id
            };

            let result = await buildMetaDataService.buildDeleteOneMetaData(id);

            expect(result).toStrictEqual(expectedResultFormat);
        });
    });
});
