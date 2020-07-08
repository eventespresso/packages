/* eslint-disable */
const fs = require('fs');
const path = require('path');
const R = require('ramda');

const PACKAGES_DIR = path.resolve(__dirname, '../packages');
const DOMAINS_DIR = path.resolve(__dirname, '../domains');

/**
 * Returns true if the given base file name for a file within the packages
 * directory is itself a directory.
 *
 * @param {string} file Packages directory file.
 *
 * @return {boolean} Whether file is a directory.
 */
const isDirectory = (relativePath) => (file) => {
	return fs.lstatSync(path.resolve(relativePath, file)).isDirectory();
};

/**
 * Returns true if the given packages have "main:src" field.
 *
 * @param {string} file Packages directory file.
 *
 * @return {boolean} Whether package has "main:src" field.
 */
const hasMainSrcField = (relativePath) => (file) => {
	const packagePath = path.resolve(relativePath, file, 'package.json');

	return hasField(packagePath, 'main:src');
};

/**
 * Returns true if the given packages have "main:src" field.
 *
 * @param {string} file Packages directory file.
 *
 * @return {boolean} Whether package has "main:src" field.
 */
const hasIsCoreField = (relativePath) => (file) => {
	const packagePath = path.resolve(relativePath, file, 'package.json');

	return hasField(packagePath, 'isCore');
};

/**
 * Returns true if the given package.json has the given field.
 *
 * @param {string} packagePath Absolute path to package.json
 * @param {string} field Name of the field to look for
 *
 * @return {boolean} Whether package.json has field.
 */
const hasField = (packagePath, field) => {
	let pkg;
	try {
		pkg = require(packagePath);
	} catch {
		// If, for whatever reason, the package's `package.json` cannot be read,
		// consider it as an invalid candidate. In most cases, this can happen
		// when lingering directories are left in the working path when changing
		// to an older branch where a package did not yet exist.
		return false;
	}

	const isNotNil = R.complement(R.isNil);
	const isNotEmpty = R.complement(R.isEmpty);

	return R.allPass([isNotNil, isNotEmpty])(pkg[field]);
};

/**
 * Filter predicate, returning true if the given base file name is to be
 * included in the build.
 */
const filterPackages = R.allPass([isDirectory(PACKAGES_DIR), hasMainSrcField(PACKAGES_DIR)]);
const filterDomains = R.allPass([isDirectory(DOMAINS_DIR), hasMainSrcField(DOMAINS_DIR)]);
const filterCoreDomains = R.allPass([hasIsCoreField(DOMAINS_DIR)]);

/**
 * Returns the names of all packages
 *
 * @return {Array} Package names
 */
const getPackages = () => {
	return fs.readdirSync(PACKAGES_DIR).filter(filterPackages);
};

/**
 * Returns the names of all domains
 *
 * @return {Array} Domain names
 */
const getDomains = () => {
	return fs.readdirSync(DOMAINS_DIR).filter(filterDomains);
};

/**
 * Returns the names of all core domains
 *
 * @return {Array} Domain names
 */
const getCoreDomains = () => {
	return getDomains().filter(filterCoreDomains);
};

module.exports = {
	getDomains,
	getPackages,
	getCoreDomains,
};
