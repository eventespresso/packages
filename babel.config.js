module.exports = function (api) {
	api.cache(true);

	const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];

	const plugins = ['@babel/plugin-transform-runtime'];

	const productionPlugins = [];
	if (process.env.BUILD_POT !== 'false') {
		productionPlugins.push([
			'@wordpress/babel-plugin-makepot',
			{
				output: './build/js-translations.pot',
			},
		]);
	}

	return {
		presets,
		plugins,
		env: {
			production: {
				plugins: productionPlugins,
			},
		},
	};
};
