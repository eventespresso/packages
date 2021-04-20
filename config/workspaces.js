const fs = require('fs');
const R = require('ramda');

/**
 * Filter predicate, returns true if the given base file name is to be
 * included in the build.
 */
const isPackage = R.allPass([R.has('location'), R.propSatisfies(R.startsWith('packages/'), 'location')]);
const isDomain = R.allPass([R.has('location'), R.propSatisfies(R.startsWith('domains/'), 'location')]);

/**
 * Get all the workspaces.
 *
 * @return {Array<Record<'name' | 'location', string>>} Package names
 */
const getWorkspaces = () => {
	return JSON.parse(fs.readFileSync('./workspaces.json'));
};

/**
 * Returns all packages
 * @param {boolean} stripNamespace Whether to remove the namespace (@eventespresso) from the name.
 *
 * @return {Array<Record<'name' | 'location', string>>} Packages
 */
const getPackages = (stripNamespace = true) => {
	const packages = R.filter(isPackage, getWorkspaces());
	if (stripNamespace) {
		return R.map(R.over(R.lensProp('name'), R.replace('@eventespresso/', '')), packages);
	}
	return packages;
};

/**
 * Returns the all domains
 * @param {boolean} stripNamespace Whether to remove the namespace (@eventespresso) from the name.
 *
 * @return {Array<Record<'name' | 'location', string>>} Domains
 */
const getDomains = (stripNamespace = true) => {
	const domains = R.filter(isDomain, getWorkspaces());
	if (stripNamespace) {
		return R.map(R.over(R.lensProp('name'), R.replace('@eventespresso/', '')), domains);
	}
	return domains;
};

module.exports = {
	getDomains,
	getPackages,
};
