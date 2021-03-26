// Taken from https://github.com/facebook/jest/issues/2867#issuecomment-546592968-permalink
import * as failFast from 'jasmine-fail-fast';
/**
 * Fail after the first test in a single test suite fails. This is NOT the same as jest's
 * --bail option, which works across test suites
 */
if (process.env.FAIL_FAST) {
	// eslint-disable-next-line jest/no-jasmine-globals, no-undef
	const jasmineEnv = jasmine.getEnv();
	jasmineEnv.addReporter(failFast.init());
}
