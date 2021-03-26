// Taken from https://github.com/facebook/jest/issues/2867#issuecomment-546592968-permalink
import * as failFast from 'jasmine-fail-fast';

if (JSON.parse(process.env.npm_config_argv).original.includes('--bail')) {
	// eslint-disable-next-line jest/no-jasmine-globals, no-undef
	const jasmineEnv = jasmine.getEnv();
	jasmineEnv.addReporter(failFast.init());
}
