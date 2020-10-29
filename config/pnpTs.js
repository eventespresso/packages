/* eslint-disable @typescript-eslint/no-var-requires */
const { resolveModuleName } = require('ts-pnp');

exports.resolveModuleName = (typescript, moduleName, containingFile, compilerOptions, resolutionHost) => {
	return resolveModuleName(moduleName, containingFile, compilerOptions, resolutionHost, typescript.resolveModuleName);
};

exports.resolveTypeReferenceDirective = (typescript, moduleName, containingFile, compilerOptions, resolutionHost) => {
	return resolveModuleName(
		moduleName,
		containingFile,
		compilerOptions,
		resolutionHost,
		typescript.resolveTypeReferenceDirective
	);
};
