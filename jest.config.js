module.exports = {
	testEnvironment: 'jsdom',
	bail: true,
	verbose: true,
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|scss|sass)$': 'identity-obj-proxy',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts',
		'!**/node_modules/**',
		'!src/**/*.entity.ts',
		'!src/**/*.config.ts',
		'!src/**/index.ts',
	],
	coverageReporters: ['json', 'text', 'html', 'lcov'],
	coverageDirectory: 'reports/coverage',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	testMatch: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts'],
	preset: 'ts-jest',
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
				pageTitle: 'Test API',
				outputPath: 'reports/test.v1.html',
			},
		],
	],
};
