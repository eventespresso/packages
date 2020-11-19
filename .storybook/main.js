const path = require('path');

module.exports = {
	stories: ['../packages/**/src/**/*.stories.@(ts|tsx)'],
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
			include: path.resolve(__dirname, '../packages'),
			exclude: ['/node_modules/'],
		});

		return config;
	},
};
