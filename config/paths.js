/* eslint-disable */
const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const { getCommandArgs, camelCaseDash } = require('./utils');
const R = require('ramda');

const { getPackages, getDomains, getCoreDomains } = require('./packages-and-domains');

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

/**
 * Get args from CLI to watch only the domains specified during dev
 * All domains in production and all packages are watched by default
 * Domain names should match their corresponding directory names
 * Example commands:
 * - `yarn dev --domains "eventEditor,wpPluginsPage"`
 * - `yarn dev --domains "eventEditor"` - default
 * - `yarn dev --domains "all"`
 * - `yarn build --domains "core"`
 * - `yarn build --domains "rem" --skip-packages`
 */
let { domains: suppliedDomains, ['skip-packages']: skipPackages } = getCommandArgs();

// since icons package is bundled, it will be loaded regardles
const packages = getPackages();

const packagePaths = [];
const packageEntries = {};

packages.forEach((packageName) => {
	const packageEntry = resolveModule(resolveApp, PACKAGES_FOLDER + `/${packageName}/src/index`);
	const packagePath = resolveApp(PACKAGES_FOLDER + `/${packageName}/src`);
	// "edtr-services" becomes "edtrServices"
	const name = camelCaseDash(packageName);

	// we don't need an entry point for icons
	if (name !== 'icons' && !skipPackages) {
		packageEntries[name] = [packageEntry];
	}
	packagePaths.push(packagePath);
});

const allDomains = getDomains();
// no domain to watch by default
let domainsToWatch = [];
if (suppliedDomains && typeof suppliedDomains === 'string') {
	switch (suppliedDomains) {
		case 'all':
			domainsToWatch = allDomains;
			break;
		case 'core':
			domainsToWatch = getCoreDomains();
			break;
		default:
			domainsToWatch = R.map(R.trim, R.split(',', suppliedDomains));
			break;
	}
}
if (domainsToWatch.some((domain) => !allDomains.includes(domain))) {
	throw new Error('Unknown domain');
}

console.log('Watching domains: ', domainsToWatch);

const domainPaths = [];
const domainEntries = {};

domainsToWatch.forEach((domain) => {
	const domainEntry = resolveModule(resolveApp, DOMAINS_FOLDER + `/${domain}/src/index`);
	const domainPath = resolveApp(DOMAINS_FOLDER + `/${domain}/src/`);

	domainEntries[domain] = [domainEntry];
	domainPaths.push(domainPath);
});

const includePaths = [...packagePaths, ...domainPaths];

// Add global types to include paths for ts-loader
includePaths.push(resolveApp('types'));

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
