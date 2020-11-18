const path = require('path');

module.exports = {
	stories: ['../packages/**/src/**/*.stories.@(ts|tsx)'],
	addons: [
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
		'@storybook/addon-knobs',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
		'@storybook/addon-a11y',
	],
	webpackFinal: async (config) => {
		// Remove the existing css/scss rule
		config.module.rules = config.module.rules.filter((f) => f.test.toString() !== /\.s[ca]ss$/.toString());

		config.module.rules.push({
			test: /\.scss$/,
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
