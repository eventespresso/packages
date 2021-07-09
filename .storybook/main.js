const path = require('path');

const include = [path.resolve(__dirname, '../domains'), path.resolve(__dirname, '../packages')];
const stories = ['../domains/**/src/ui/**/*.stories.tsx', '../packages/**/src/**/*.stories.@(ts|tsx)'];

module.exports = {
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
		'@storybook/addon-a11y',
		,
		{
			name: '@storybook/addon-docs',
			options: { configureJSX: true },
		},
		{
			name: '@storybook/preset-scss',
			options: {
				cssLoaderOptions: {
					modules: true,
				},
			},
		},
	],
	stories,
	webpackFinal: async (config) => {
		// Remove the existing css/scss rule
		config.module.rules = config.module.rules.filter((f) => f.test.toString() !== /\.s[ca]ss$/.toString());

		config.module.rules.push({
			test: /\.scss$/,
			sideEffects: true,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						// Prefer `dart-sass`
						implementation: require('sass'),
					},
				},
			],
			include,
			exclude: ['/node_modules/'],
		});

		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					/**
					 * Fix for storybook issue in Chakra UI
					 * @see https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-728161743
					 */
					'@emotion/core': path.resolve(__dirname, '../node_modules/@emotion/react'),
					'emotion-theming': path.resolve(__dirname, '../node_modules/@emotion/react'),
					'@emotion/styled': path.resolve(__dirname, '../node_modules/@emotion/styled'),
				},
			},
		};
	},
};
