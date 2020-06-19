const { resolve } = require('path');

const { domains } = require('./paths');

function resolveTsconfigPathsToAlias() {
	// get paths defined in root, if any
	const tsconfigPath = '../tsconfig.json';
	const rootPaths = getTsConfigPaths(tsconfigPath);
	const rootAliases = generateAliases(rootPaths);

	let aliases = { ...rootAliases };

	// loop through domains to see if paths are defined in tsconfig
	domains.forEach((domain) => {
		const relativePath = `domains/${domain}/`;

		const tsconfigPath = `../${relativePath}tsconfig.json`;
		const domainPaths = getTsConfigPaths(tsconfigPath);
		const domainAliases = generateAliases(domainPaths, relativePath);
		aliases = { ...aliases, ...domainAliases };
	});

	return aliases;
}

const getTsConfigPaths = (tsconfigPath) => {
	const { paths } = require(tsconfigPath).compilerOptions;
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
		aliases[key] = value;
		return aliases;
	}, {});
};

module.exports = resolveTsconfigPathsToAlias;
