module.exports = {
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/tests/",
        "/src/middleware/",
        "/src/routes/",
    ],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}"],
    coverageDirectory: "<rootDir>/coverage",
    coverageReporters: ["html", "text"],
};
