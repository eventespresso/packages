/* eslint-disable */
const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const { getCommandArgs, camelCaseDash } = require('./utils');

const PACKAGES_FOLDER = 'packages';
const DOMAINS_FOLDER = 'domains';

const isEnvDevelopment = process.env.NODE_ENV === 'development';

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
	isEnvDevelopment,
	require(resolveApp('package.json')).homepage,
	process.env.PUBLIC_URL
);

const moduleFileExtensions = [
	'web.mjs',
	'mjs',
	'web.js',
	'js',
	'web.ts',
	'ts',
	'web.tsx',
	'tsx',
	'json',
	'web.jsx',
	'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
	const extension = moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)));

	if (extension) {
		return resolveFn(`${filePath}.${extension}`);
	}

	return resolveFn(`${filePath}.js`);
};

const packages = [
	'adapters',
	'components',
	'constants',
	'data',
	'edtr-services',
	'form',
	'helpers',
	'icons',
	'predicates',
	'registry',
	'services',
	'styles',
	'toaster',
];

const packagePaths = [];
const packageEntries = {};

packages.forEach((packageName) => {
	const packageEntry = resolveModule(resolveApp, PACKAGES_FOLDER + `/${packageName}/index`);
	const packagePath = resolveApp(PACKAGES_FOLDER + `/${packageName}`);
	// "edtr-services" becomes "edtrServices"
	const name = camelCaseDash(packageName);

	packageEntries[name] = [packageEntry];
	packagePaths.push(packagePath);
});

const allDomains = ['eventEditor' /* ,'wpPluginsPage', 'blocks' */];

/**
 * Get args from CLI to watch only the domains specified during dev
 * All domains in production and all packages are watched by default
 * Domain names should match their corresponding directory names
 * Example commands:
 * - `yarn dev --domains "eventEditor,wpPluginsPage"`
 * - `yarn dev --domains "eventEditor"` - default
 * - `yarn dev --domains "all"`
 */
let { domains: suppliedDomains } = getCommandArgs();
// if not in dev, we will build all domains
if (!isEnvDevelopment) {
	suppliedDomains = 'all';
}
// set "eventEditor" as the default domain to watch
let domainsToWatch = ['eventEditor'];
if (suppliedDomains && typeof suppliedDomains === 'string') {
	domainsToWatch = suppliedDomains === 'all' ? allDomains : suppliedDomains.split(',');
}
if (domainsToWatch.some((domain) => !allDomains.includes(domain))) {
	throw new Error('Unknown domain');
}

const domainPaths = [];
const domainEntries = {};

domainsToWatch.forEach((domain) => {
	const domainEntry = resolveModule(resolveApp, DOMAINS_FOLDER + `/${domain}/src/index`);
	const domainPath = resolveApp(DOMAINS_FOLDER + `/${domain}/src/`);

	domainEntries[domain] = [domainEntry];
	domainPaths.push(domainPath);
});

const includePaths = [...packagePaths, ...domainPaths];

// config after eject: we're in ./config/
module.exports = {
	dotenv: resolveApp('.env'),
	appPath: resolveApp('.'),
	appBuild: resolveApp('build'),
	appPublic: resolveApp('public'),
	appHtml: resolveApp('public/index.html'),
	appIndexJs: resolveModule(resolveApp, 'src/index'),
	appPackageJson: resolveApp('package.json'),
	appSrc: resolveApp('src'),
	appTsConfig: resolveApp('tsconfig.json'),
	appJsConfig: resolveApp('jsconfig.json'),
	yarnLockFile: resolveApp('yarn.lock'),
	testsSetup: resolveModule(resolveApp, 'src/setupTests'),
	proxySetup: resolveApp('src/setupProxy.js'),
	appNodeModules: resolveApp('node_modules'),
	publicUrlOrPath,
	entry: { ...packageEntries, ...domainEntries },
	includePaths,
	domains: allDomains,
	packages,
};

module.exports.moduleFileExtensions = moduleFileExtensions;
