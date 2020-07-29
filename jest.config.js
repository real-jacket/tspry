module.exports = {
	bail: 1,
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!**/node_modules/**'],
	coverageDirectory: 'coverage',
	coverageReporters: ['lcov', 'text'],
	reporters: ['default', ['jest-junit', { outputDirectory: './test-results/jest', outputName: 'results.xml' }]],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 95,
			lines: 95,
			statements: 95,
		},
	},
	preset: 'ts-jest/presets/js-with-ts',
	testMatch: ['<rootDir>/**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test/__mocks__/fileMock.js',
		'\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
}
