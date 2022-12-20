module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["<rootDir>/src/components/**/**/?(*.)+(spec|test).[tj]s?(x)"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|pcss)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
};
