/* eslint-disable */
/**
 * This script checks if all the packages are added to our custom ESLint rules levels array
 */

const { packages } = require('../config/paths');
const levelPackages = require('./levels').flat();

packages.forEach((package) => {
	if (!levelPackages.includes(package)) {
		throw new Error(`${package} is not added to ESLint package rules.`);
	}
});
