module.exports = {
	preset: 'jest-playwright-preset',
	globalSetup: 'jest-playwright-preset/setup.js',
	reporters: undefined,
	setupFilesAfterEnv: ['<rootDir>/config/setup-playwright.js', '@wordpress/jest-console'],
	testMatch: ['**/specs/**/*.[jt]s', '**/?(*.)spec.[jt]s'],
	testPathIgnorePatterns: ['/node_modules/'],
	verbose: process.env.CI === 'true',
};
