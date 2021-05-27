function defaultTemplate({ template }, opts, { interfaces, componentName, jsx }) {
	const plugins = ['jsx'];
	if (opts.typescript) {
		plugins.push('typescript');
	}
	const typeScriptTpl = template.smart({ plugins });

	return typeScriptTpl.ast`

	import withClassName from '../withClassName';
	import { IconProps } from '../types';

	${interfaces}

	const ${componentName} = (props: IconProps): JSX.Element => {
		return ${jsx};
	}

	export default withClassName(${componentName}, ${componentName});
	`;
}
module.exports = defaultTemplate;
