import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/lib/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "lcov", "clover"],
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.test.ts"],
   

  transform: {
    ...tsJestTransformCfg,
  },
};