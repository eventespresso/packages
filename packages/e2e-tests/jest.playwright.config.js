module.exports = {
	preset: 'jest-playwright-preset',
	globalSetup: 'jest-playwright-preset/setup.js',
	reporters: undefined,
	setupFilesAfterEnv: ['<rootDir>/config/setup-playwright.js', '@wordpress/jest-console'],
	testMatch: ['**/specs/**/*.[jt]s', '**/?(*.)spec.[jt]s'],
	testEnvironmentOptions: {
		'jest-playwright': {
			launchOptions: {
				headless: process.env.CI === 'true' ? true : process.env.HEADLESS,
				// slowMo: +process.env.SLOW_MO,
			},
		},
	},
	testPathIgnorePatterns: ['/node_modules/'],
	verbose: process.env.CI === 'true',
};
