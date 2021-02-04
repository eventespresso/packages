module.exports = {
	debug: true,
	launchOptions: {
		proxy: {
			server: process.env.CI ? 'http://localhost:8889/' : 'http://ee.local/',
		},
	},
	preset: 'jest-playwright-preset',
	testMatch: ['**/specs/**/*.[jt]s', '**/?(*.)spec.[jt]s'],
	testPathIgnorePatterns: ['/node_modules/'],
	reporters: undefined,
	setupFilesAfterEnv: ['<rootDir>/config/setup-playwright.js', '@wordpress/jest-console'],
};
