const { resolve } = require('path');

const { getDomains } = require('./workspaces');

function resolveTsconfigPathsToAlias() {
	// get paths defined in root, if any
	const tsconfigPath = '../tsconfig.json';
	const rootPaths = getTsConfigPaths(tsconfigPath);
	const rootAliases = generateAliases(rootPaths);

	let aliases = { ...rootAliases };

	// loop through domains to see if paths are defined in tsconfig
	getDomains().forEach(({ location }) => {
		const tsconfigPath = `../${location}/tsconfig.json`;
		const domainPaths = getTsConfigPaths(tsconfigPath);
		const domainAliases = generateAliases(domainPaths, location);
		aliases = { ...aliases, ...domainAliases };
	});

	return aliases;
}

const getTsConfigPaths = (tsconfigPath) => {
	const { paths } = require(tsconfigPath).compilerOptions || {};
	return paths;
};

const generateAliases = (paths, relativePath = '') => {
	const pathEntries = Object.entries(paths || {});
	if (!pathEntries.length) {
		return {};
	}

	return pathEntries.reduce((aliases, [alias, [path]]) => {
		// "@edtrServices/*" becomes "@edtrServices"
		const key = alias.replace('/*', '');
		// "src/services/*" becomes "domains/eventEditor/src/services"
		const value = resolve('./', relativePath + path.replace('/*', '').replace('*', ''));
		return { ...aliases, [key]: value };
	}, {});
};

module.exports = resolveTsconfigPathsToAlias;
