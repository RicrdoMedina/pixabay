import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customConfig: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/**/domain/*Entity.ts',
    '!src/**/config/**',
    '!src/**/mocks/**',
    '!src/**/index.ts',
    '!src/**/dependencyInjection/*Injection.ts',
    '!src/**/store/providers.tsx',
    '!src/**/store/store.ts',
    '!src/components/Svg/**',
  ],
  coverageReporters: ['json', 'text', 'html', 'lcov'],
  coverageDirectory: 'reports/coverage',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: 'reports',
        filename: 'test.v2.html',
      },
    ],
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Frontend',
        outputPath: 'reports/test.v1.html',
      },
    ],
  ],
};

export default createJestConfig(customConfig);