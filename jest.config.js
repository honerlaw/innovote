import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./",
})

export default async function () {
  const shared = {
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    collectCoverage: true,
    moduleNameMapper: {
      "^@/": "<rootDir>/src/",
    },
  }

  return {
    projects: [
      await createJestConfig({
        displayName: "client",
        testMatch: ["**/*.test.{ts,tsx}", "!**/*.server.test.{ts,tsx}"],
        testEnvironment: "jsdom",
        setupFilesAfterEnv: ["<rootDir>/jest.client.setup.js"],
        ...shared,
      })(),
      await createJestConfig({
        displayName: "server",
        testMatch: ["**/*.server.test.{ts,tsx}"],
        testEnvironment: "node",
        setupFilesAfterEnv: ["<rootDir>/jest.server.setup.js"],
        ...shared,
      })(),
    ],
  }
}
