/* eslint-disable */
const levels = require('./levels');

/**
 * This creates a map (package: level) like this
 * {
 *     adapters: 1,
 *     components: 3,
 *     constants: 0,
 *     data: 1,
 *     edtr-services: 3,
 *     form: 2,
 *     helpers: 3,
 * }
 */
const packageLevels = levels.reduce((res, curr, i) => {
	return {
		...res,
		...curr.reduce((list, item) => {
			return { ...list, [item]: i };
		}, {}),
	};
}, {});

module.exports = {
	rules: {
		'no-circular-imports': {
			create: function (context) {
				return {
					ImportDeclaration(node) {
						if (node.importKind !== 'type' && node.source.value.startsWith('@eventespresso/')) {
							const path = context.getFilename();
							// ignore tests
							if (path.match(/[.\\/]tests?[.\\/](tsx?$)?/)) {
								return;
							}
							// TODO use file system to resolve paths
							const match = path.match(/[\\/]packages[\\/](?<package>[^\\/]+)[\\/]/);
							if (match && match.groups.package && match.groups.package) {
								const dependency = node.source.value.split('/')[1];
								const sourcePkg = match.groups.package;

								if (
									packageLevels[sourcePkg] &&
									packageLevels[dependency] &&
									packageLevels[sourcePkg] <= packageLevels[dependency]
								) {
									context.report({
										node: node,
										message: `You cannot import "${node.source.value}" into "@eventespresso/${sourcePkg}"`,
									});
								}
							}
						}
					},
				};
			},
		},
	},
};
