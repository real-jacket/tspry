module.exports = {
	bail: 1,
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['<rootDir>/**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test/__mocks__/file-mock.js',
		'\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/object-mock.js',
	},
}
