// Taken from https://github.com/facebook/jest/issues/2867#issuecomment-546592968-permalink
const failFast = require('jasmine-fail-fast');

if (process.argv.includes('--bail')) {
	// eslint-disable-next-line jest/no-jasmine-globals, no-undef
	const jasmineEnv = jasmine.getEnv();
	jasmineEnv.addReporter(failFast.init());
}
