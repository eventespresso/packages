module.exports = {
	preset: 'jest-playwright-preset',
	testMatch: ['**/specs/**/*.[jt]s', '**/?(*.)spec.[jt]s'],
	testPathIgnorePatterns: ['/node_modules/'],
	reporters: undefined,
	setupFilesAfterEnv: ['<rootDir>/config/setup-playwright.js', '@wordpress/jest-console'],
	verbose: process.env.CI === 'true',
};
